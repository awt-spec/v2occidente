import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const documentContent = `
# FileMaster: Expediente Digital — Propuesta para AFPC Occidente

## Información Principal:
- **Cliente**: AFPC Occidente
- **Solución**: FileMaster - Expediente Digital
- **Empresa**: SYSDE / Gurunet

## Expediente Digital de SYSDE:
SYSDE es experto en la digitalización de procesos empresariales a través de su plataforma de Expediente Digital, FileMaster. La solución permite diseñar, implementar y gestionar flujos de trabajo digitales adaptados a las necesidades de cada organización.

### Flujos para AFPC Occidente:
- **Flujo de Afiliación**: Digitalización completa del proceso de afiliación, desde la recepción de documentos hasta la aprobación y registro del afiliado.
- **Procesos ISO**: Implementación de flujos que cumplan con los estándares ISO requeridos, garantizando trazabilidad y control documental.
- **Flujos Adicionales**: Cualquier proceso que AFPC Occidente requiera digitalizar puede ser modelado e implementado en FileMaster.

### Primer Flujo:
SYSDE realizará la implementación del primer flujo digital para AFPC Occidente, configurado, personalizado y puesto en producción por el equipo de consultores de SYSDE.

## Gestión de Flujos Digitales:
- Diseño de flujos con etapas, decisiones y asignaciones automáticas
- Expediente completo que centraliza documentos, historial y estados
- Asignación y roles con permisos definidos
- Estados automáticos que se actualizan conforme avanza el flujo

## Ciclo de Vida del Expediente:
1. Creación: Ingreso del caso y documentos iniciales
2. Procesamiento: Ejecución de etapas según el flujo definido
3. Revisión: Validación y aprobación por supervisores
4. Cierre: Resolución y archivo del expediente

## Trazabilidad y Control:
- Bitácora completa con fecha, hora, usuario, detalle y resultados
- Gestión documental: carga, almacenamiento y consulta
- Historial cronológico de todas las acciones
- Seguridad y permisos granulares por rol

## Roles:
- **Supervisor**: Configura flujos, asigna casos, aprueba/rechaza decisiones
- **Operador**: Ejecuta tareas, carga documentos, registra gestiones
- **Auditor**: Acceso de lectura para revisión y cumplimiento ISO

## Infraestructura ON-CLOUD:
- Servidor: Microsoft Azure, 4 núcleos, 512 GB disco, 16 GB RAM
- Servicios de Red: Respaldo mensual, 3 meses de retención

## Inversión Económica:
| Suscripción Mensual para 20 usuarios | USD $999.00 |
| Flujo adicional (creado por AFPC Occidente) | USD $99.00/mes |

### FileMaster Champions:
- Acompañamiento experto: USD $30.00 por hora

### Incluido en la suscripción:
- Licenciamiento de FileMaster
- 20 usuarios
- Capacitación progresiva
- Mantenimiento evolutivo
- Infraestructura Azure
- Consultor de acompañamiento
- Implementación del primer flujo digital

### Método de Pago:
Se factura el primer día hábil de cada mes. Contrato mínimo de tres años.

## Cronograma (4 semanas):
| Etapa | Tarea |
|-------|-------|
| 0 | Creación de nueva instancia |
| 1 | Implementación del primer flujo digital |
| 2 | Ajustes de personalización al flujo |
| 3 | Capacitación progresiva y técnica |
| 4 | Acompañamiento post implementación |

## Términos y Condiciones:
- Precios en USD, no incluyen impuestos
- Contrato mínimo de tres años
- Modificaciones mediante orden de cambio
- Gastos de viaje no incluidos
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { question } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `Eres un asistente especializado en la propuesta de FileMaster: Expediente Digital de SYSDE para AFPC Occidente. Responde preguntas sobre esta propuesta de manera clara, profesional y útil.

INFORMACIÓN DEL DOCUMENTO:
${documentContent}

INSTRUCCIONES:
1. Responde SOLO sobre la información contenida en la propuesta
2. Si la pregunta no está relacionada, redirige educadamente hacia los temas de la propuesta
3. Sé claro, conciso y profesional
4. Usa emojis moderadamente
5. Si no tienes información específica, sugiere contactar al equipo de SYSDE
6. Formatea en markdown`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question },
        ],
        max_tokens: 800,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Demasiadas consultas." }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Servicio temporalmente no disponible." }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Error del servicio de IA." }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "Lo siento, no pude procesar tu pregunta.";

    return new Response(JSON.stringify({ response: aiResponse }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Error desconocido" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
