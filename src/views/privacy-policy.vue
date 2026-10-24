<template>
  <div class="bg-[var(--bg)] min-h-screen w-full text-[var(--text)] font-alexandria relative">
    <div class="w-full flex flex-row gap-12">
      <!-- Sidebar -->
      <PolicySidebar
        :groups="groups"
        :activeSection="activeSection"
        @scroll="scrollTo"
      />

      <!-- Content -->
      <main class="flex-1 max-w-5xl mx-auto py-16 px-8">
        <div id="intro" class="section scroll-mt-24 my-16">
          <h1 class="text-5xl md:text-5xl font-normal text-[var(--text-terceary)] opacity-50 mb-16">Términos y condiciones</h1>
          <h1 class="text-6xl md:text-4xl font-normal mb-8">Introducción</h1>
            <span class="text-[var(--text-secondary)] italic font-light text-sm">
            "Sabemos que es tentador saltarse estos Términos del Servicio, pero es importante
            entender qué puedes esperar de nosotros al usar los servicios de <strong>digiapps</strong>
            y qué esperamos nosotros de ti."</span><br><br>
            <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12">
            Sabemos que puede ser tentador omitir estos Términos del Servicio, pero es
            importante comprender las condiciones bajo las cuales puedes acceder y utilizar los servicios de <strong>digiapps</strong>.<br><br>

            En <strong>digiapps</strong> desarrollamos herramientas, aplicaciones y soluciones tecnológicas orientadas a facilitar procesos,
            mejorar la productividad y ofrecer experiencias digitales eficientes. Estos términos establecen el marco general
            que regula el acceso, uso y funcionamiento de todos nuestros productos y servicios, así como las condiciones
            bajo las cuales los ponemos a tu disposición.<br><br>

            Al utilizar nuestros servicios, aceptas cumplir con lo establecido en este documento.
            Esto incluye respetar las condiciones de uso, las limitaciones aplicables y cualquier política adicional
            que complemente estos términos. Si no estás de acuerdo con alguna de estas condiciones, debes
            abstenerte de utilizar nuestros servicios.<br><br>

            Nuestro objetivo es mantener un entorno seguro, confiable y en constante mejora. Por ello, estos términos
            también reflejan cómo operamos, actualizamos y protegemos nuestras plataformas, así como los criterios bajo los
            cuales podemos realizar cambios, limitar funcionalidades o suspender el acceso cuando sea necesario.<br><br>

            Te recomendamos revisar también nuestra Política de Privacidad, donde explicamos cómo recopilamos, utilizamos y
            protegemos tu información personal como parte del uso de nuestros servicios.
          </p>
        </div>

        <div id="collect" class="section mb-16 scroll-mt-24">
          <h1 class="text-6xl md:text-4xl font-normal mb-8">Tu relación con digiapps</h1>
            <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12">
              Estos términos ayudan a definir tu relación con <strong>digiapps</strong>. Cuando hablamos de “digi”,
              “nosotros”, “nos” o “nuestro”, nos referimos a <strong>digiapps</strong>, sus plataformas, aplicaciones,
              servicios y cualquier tecnología asociada que ponemos a tu disposición.<br><br>

              Te otorgamos un permiso limitado, no exclusivo y revocable para acceder y utilizar
              nuestros servicios, condicionado al cumplimiento de estos términos y de cualquier
              política adicional aplicable. Este permiso no implica la transferencia de ningún
              derecho de propiedad sobre los servicios.<br><br>

              Estos términos reflejan la forma en que operamos, desarrollamos y mantenemos nuestros servicios,
              así como las condiciones bajo las cuales se ofrece el acceso a los mismos.<br><br>

              El uso de nuestros servicios establece una relación continua sujeta al cumplimiento de estas condiciones.
              En caso de incumplimiento, <strong>digiapps</strong> podrá limitar, suspender o cancelar el acceso a los servicios
              conforme a lo establecido en estos términos.<br><br>

              Algunos servicios pueden estar sujetos a condiciones adicionales específicas, las cuales complementan y
              forman parte integral de este acuerdo.<br><br>
            </p>
            <h2 class="text-3xl font-normal mb-8">Qué puedes esperar de digiapps</h2>
            <h3 class="text-2xl font-light mb-4 text-[var(--text-secondary)]"> 1. Ofrecer una gama de servicios útiles</h3>
              <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-4">
                <strong>digiapps</strong> ofrece una gama de servicios sujetos a estos términos, que pueden incluir:
              </p>
                <ul class="mx-12 mb-4 text-[var(--text-terceary)] leading-relaxed text-md font-light" style="list-style-type: disc">
                  <li>Aplicaciones y herramientas digitales</li>
                  <li>Plataformas web</li>
                  <li>Servicios integrados en productos de terceros</li>
                  <li>Funcionalidades conectadas entre distintos servicios</li>
                  <li>Contenido interactivo o procesado dentro de nuestras plataformas</li>
                </ul>
              <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-12">
                Nuestros servicios están diseñados para funcionar de forma integrada, facilitando
                la continuidad entre tareas y el acceso desde distintos entornos o dispositivos cuando sea aplicable.
              </p>
              <h3 class="text-2xl font-light mb-4 text-[var(--text-secondary)]"> 2. Desarrollo, mejora y actualización de los servicios</h3>
              <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-4">
                Trabajamos continuamente en el desarrollo y mejora de nuestros servicios.
                Esto puede implicar la incorporación de nuevas funcionalidades, la modificación
                de características existentes o la eliminación de aquellas que dejen de ser
                viables o relevantes.<br><br>
                Como parte de este proceso:
              </p>
              <ul class="mx-12 mb-4 text-[var(--text-terceary)] leading-relaxed text-md font-light" style="list-style-type: disc">
                  <li>Podemos actualizar funcionalidades de forma periódica</li>
                  <li>Podemos ajustar límites técnicos o capacidades del servicio</li>
                  <li>Podemos introducir nuevos servicios o retirar existentes</li>
                </ul>
              <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-4">
                Cuando un servicio incluya software o componentes técnicos que requieran actualización, estas podrán realizarse automáticamente o según la configuración disponible.<br><br>
                En caso de cambios sustanciales que afecten negativamente el uso del servicio, procuraremos notificarlo con una antelación razonable, salvo en situaciones que requieran actuación inmediata, incluyendo razones de seguridad, cumplimiento legal o prevención de abusos.<br><br>
                Cuando sea posible y conforme a la normativa aplicable, podrás exportar o eliminar tu contenido.<br><br>
              </p>
              <h2 class="text-3xl font-normal mb-8">Lo que esperamos de ti</h2>
              <h3 class="text-2xl font-light mb-4 text-[var(--text-secondary)]"> 1. Cumplimiento de los términos</h3>
                <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-4">
                  El acceso y uso de los servicios está condicionado al cumplimiento de:
                </p>
                <ul class="mx-12 mb-4 text-[var(--text-terceary)] leading-relaxed text-md font-light" style="list-style-type: disc">
                    <li>Estos términos</li>
                    <li>Condiciones adicionales aplicables a servicios específicos</li>
                </ul>
                <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-4">
                  El incumplimiento de estas condiciones puede dar lugar a la limitación o suspensión del acceso.
                </p>
                  <h3 class="text-2xl font-light mb-4 text-[var(--text-secondary)]"> 2. Uso adecuado de los servicios</h3>
                <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-4">
                  Debes utilizar los servicios de manera responsable. Esto implica:
                </p>
                <ul class="mx-12 mb-4 text-[var(--text-terceary)] leading-relaxed text-md font-light mb-4" style="list-style-type: disc">
                    <li>Cumplir la legislación aplicable</li>
                    <li>Respetar los derechos de terceros, incluyendo privacidad y propiedad intelectual</li>
                    <li>No realizar actividades que causen daño, abuso o interferencia</li>
                </ul>
                 <h3 class="text-2xl font-light mb-4 text-[var(--text-secondary)]">
                  3. Conductas no permitidas
                </h3>
                <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-4">
                  No está permitido:
                </p>
                <ul class="mx-12 mb-4 text-[var(--text-terceary)] leading-relaxed text-md font-light" style="list-style-type: disc">
                    <li>Interferir con el funcionamiento de los servicios</li>
                    <li>Acceder de forma no autorizada a sistemas o datos</li>
                    <li>Utilizar los servicios para fraude, suplantación o engaño</li>
                    <li>Distribuir software malicioso o realizar actividades que comprometan la seguridad</li>
                    <li>Utilizar mecanismos automatizados de forma indebida</li>
                    <li>Intentar extraer, replicar o explotar tecnología, algoritmos o sistemas sin autorización</li>
                    <li>Realizar ingeniería inversa o descompilación de software</li>
                    <li>Infringir políticas de seguridad o uso aceptable</li>
                    <li>Acceder de forma no autorizada a sistemas o datos</li>
                    <li>Utilizar los servicios para fraude, suplantación o engaño</li>
                    <li>Distribuir software malicioso o realizar actividades que comprometan la seguridad</li>
                    <li>Utilizar mecanismos automatizados de forma indebida</li>
                    <li>Utilizar los servicios para infringir derechos legales de terceros</li>
                </ul>
                <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-4">
                  Nos reservamos el derecho de tomar medidas cuando se detecte uso indebido, incluyendo, pero no limitándose a, la suspensión o cancelación del acceso.
                </p>
                <h3 class="text-2xl font-light mb-4 text-[var(--text-secondary)]">
                  4. Permiso para usar tu contenido
                </h3>
                <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-12">
                  Algunos servicios de <strong>digiapps</strong> permiten subir, almacenar, compartir o procesar contenido. No estás obligado a proporcionar contenido, y puedes decidir qué compartir.<br><br>
                  Debes asegurarte de contar con los derechos necesarios sobre el contenido que proporcionas y de que este cumple con la legislación aplicable.
                </p>
                <h3 class="text-2xl font-regular mb-4 text-[var(--text-secondary)]">
                  Propiedad
                </h3>
                <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-12">
                  El contenido que subes sigue siendo tuyo. Conservas todos los derechos de propiedad intelectual sobre él.
                </p>
                <h3 class="text-2xl font-regular mb-4 text-[var(--text-secondary)]">
                  Licencia
                </h3>
                <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-12">
                  Para poder operar y mejorar los servicios, otorgas a <strong>digiapps</strong> una licencia sobre tu contenido.
                </p>
                <h3 class="text-2xl font-regular mb-4 text-[var(--text-secondary)]">
                  Alcance de la licencia
                </h3>
                <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-4">
                  Esta licencia es:
                </p>
                <ul class="mx-12 mb-4 text-[var(--text-terceary)] leading-relaxed text-md font-light" style="list-style-type: disc">
                    <li>Mundial</li>
                    <li>No exclusiva</li>
                    <li>Libre de regalías</li>
                    <li>Sublicenciable</li>
                </ul>
                <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-12">
                  Te permite usar, copiar, modificar, distribuir y mostrar tu contenido en relación con los servicios de <strong>digiapps</strong>, incluyendo marketing y promoción.
                </p>
                <h3 class="text-2xl font-regular mb-4 text-[var(--text-secondary)]">
                  Derechos otorgados
                </h3>
                <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-4">
                  La licencia permite a <strong>digiapps</strong>:
                </p>
                <ul class="mx-12 mb-4 text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12" style="list-style-type: disc">
                    <li>Almacenar, procesar y reproducir el contenido</li>
                    <li>Adaptarlo técnicamente (por ejemplo, cambios de formato)</li>
                    <li>Mostrarlo cuando así lo configures o autorices</li>
                    <li>Permitir interacciones necesarias para el funcionamiento del servicio</li>
                </ul>
                <h3 class="text-2xl font-regular mb-4 text-[var(--text-secondary)]">
                  Finalidad
                </h3>
                <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-4">
                  El uso del contenido se limita a:
                </p>
                <ul class="mx-12 mb-4 text-[var(--text-terceary)] leading-relaxed text-md font-light mb-16" style="list-style-type: disc">
                    <li>Operar y mantener los servicios</li>
                    <li>Mejorar funcionalidades</li>
                    <li>Desarrollar nuevas herramientas</li>
                    <li>Garantizar seguridad y prevención de abusos</li>
                </ul>
                <h3 class="text-2xl font-regular mb-4 text-[var(--text-secondary)]">
                  Duración
                </h3>
                <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-4">
                  La licencia se mantiene mientras el contenido esté disponible en los servicios, salvo obligaciones legales o técnicas que requieran conservación adicional.<br><br>
                  Cuando elimines contenido, dejaremos de hacerlo accesible en un plazo razonable, salvo excepciones como copias realizadas por otros usuarios o requisitos legales.
                </p>
        </div>

        <div id="usage" class="section mb-16 scroll-mt-24">
          <h1 class="text-6xl md:text-4xl font-normal mb-12">Uso de los servicios de digiapps</h1>
           <h2 class="text-3xl font-light mb-8">Tu cuenta de digiapps</h2>
            <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12">
              Si cumples con los requisitos de edad mínima aplicables, puedes crear una cuenta en digi. Algunos servicios requieren obligatoriamente una cuenta para funcionar correctamente.<br><br>
              Eres responsable de toda la actividad que se realice desde tu cuenta. Esto incluye mantener la confidencialidad de tus credenciales de acceso y adoptar medidas razonables de seguridad para protegerla.<br><br>
              digi no será responsable por accesos no autorizados derivados del uso indebido de tus credenciales, salvo en los casos previstos por la legislación aplicable.<br><br>
            </p>
            <h3 class="text-2xl font-regular mb-4 text-[var(--text-secondary)]">Comunicaciones relacionadas con el servicio</h3>
            <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-12">
              Para operar y mejorar nuestros servicios, digi puede enviarte comunicaciones relacionadas con el funcionamiento de la plataforma, incluyendo notificaciones técnicas, actualizaciones, alertas de seguridad o información relevante sobre el servicio.<br><br>
              Puedes encontrar más detalles sobre cómo gestionamos estas comunicaciones en nuestra Política de Privacidad.
            </p>
            <h3 class="text-2xl font-regular mb-4 text-[var(--text-secondary)]">Comentarios y sugerencias</h3>
            <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-36">
              Si decides enviarnos comentarios, sugerencias o propuestas de mejora, digi podrá utilizarlos para desarrollar, mejorar o modificar los servicios sin que ello genere obligación de compensación, reconocimiento o respuesta hacia ti.
            </p>
        </div>

        <div id="intro2" class="section mb-16 scroll-mt-24">
          <h1 class="text-5xl md:text-5xl font-normal text-[var(--text-terceary)] opacity-50 mb-16 mt-20">Política de privacidad</h1>
          <h1 class="text-6xl md:text-4xl font-normal mb-8">Introducción</h1>
          <p class="text-[var(--text-secondary)] italic font-light text-sm mb-6">
            En digi Systems (<strong>digi</strong> / <strong>digiapps</strong>), como responsable del tratamiento de tus datos,
            estamos comprometidos con la protección de tu privacidad.
            Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos tu información cuando utilizas nuestros servicios,
            incluyendo nuestras aplicaciones web y la extensión para navegadores Chrome <strong>rainbow</strong>,
            que forma parte del ecosistema <strong>digi</strong>.
            Al utilizar nuestro sitio web, nuestras aplicaciones y nuestras extensiones, aceptas los términos descritos en esta política.
          </p>
          <p class="text-[var(--text-terceary)] leading-relaxed text-sm font-light">
            <strong>Responsable del tratamiento:</strong> digi (<strong>digiapps</strong> / digi Systems) — Canal de contacto:
            <a href="mailto:support@digiapps.com.co" class="text-[var(--color-primary)] hover:underline">support@digiapps.com.co</a><br>
            <strong>Fecha de última actualización:</strong> 24 de octubre de 2026.
          </p>
        </div>

        <div id="info" class="section mb-16 scroll-mt-24">
          <h1 class="text-6xl md:text-4xl font-normal mb-8">Información que recopilamos</h1>
          <h3 class="text-2xl font-light mb-4 text-[var(--text-secondary)]">1. Datos de Google OAuth</h3>
            <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-8">
              Cuando inicias sesión utilizando Google OAuth, recopilamos la siguiente información:
            </p>
            <ul class="mx-12 text-[var(--text-terceary)] leading-relaxed text-md font-light mb-8" style="list-style-type: disc">
              <li>Dirección de correo electrónico</li>
              <li>Nombre</li>
              <li>ID de Google</li>
            </ul>
            <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12">
              Esta información se almacena de forma segura en nuestra base de datos.
            </p>
            <h3 class="text-xl mx-4 font-light mb-4 text-[var(--text-secondary)]">2. Permisos para Google Cloud</h3>
            <p class="text-[var(--text-terceary)] mx-4 leading-relaxed text-md font-light mb-12">
                Solicitamos permisos específicos para acceder a tu cuenta de Google Cloud exclusivamente
                con el fin de habilitar funcionalidades de Fireweb, nuestra plataforma basada en la nube.
                Estos permisos se utilizan únicamente para proporcionar y mejorar nuestros servicios.
            </p>
            <h3 class="text-2xl font-light mb-4 text-[var(--text-secondary)]">3. Datos procesados por la extensión rainbow</h3>
            <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-6">
              <strong>rainbow</strong> es un asistente de IA en el panel lateral de Chrome que forma parte del ecosistema <strong>digi</strong>. Actualmente se encuentra en <strong>fase beta y de pruebas (testing)</strong>: no requiere iniciar sesión ni cuenta de usuario y no guarda de forma persistente ningún tipo de dato en servidores (esto puede cambiar más adelante y se informará oportunamente).
            </p>
            <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-6">
              Cuando invocas la extensión desde el panel lateral, <strong>rainbow</strong> procesa en tiempo real los siguientes datos:
            </p>
            <ul class="mx-12 text-[var(--text-terceary)] leading-relaxed text-md font-light mb-8 space-y-4" style="list-style-type: disc">
              <li>
                <strong>1. Contenido de la pestaña activa cuando el agente la inspecciona:</strong>
                URL (<code>url</code>), título de la página (<code>title</code>), tipo de página
                (<code>html</code>, <code>pdf</code>, <code>docs_document</code>, <code>docs_home</code>,
                <code>docs_signin</code>, <code>docs_error</code>, <code>extension</code>) y elementos
                interactivos del DOM (<code>input</code>, <code>button</code>, <code>a</code>,
                <code>textarea</code>, <code>select</code>, <code>form</code>, <code>label</code> y elementos
                con <code>[role]</code>, <code>[tabindex]</code> o <code>contenteditable</code>), incluyendo
                su referencia interna, etiqueta HTML, rol ARIA, atributos seguros, coordenadas y dimensiones
                en pantalla (<code>rect</code>), etiquetas de accesibilidad (<code>aria-label</code>,
                <code>name</code>, <code>placeholder</code>, texto visible), estado (<code>disabled</code>,
                <code>visible</code>, <code>checked</code>) y valores de campos (<code>value</code>). En
                Google Docs también extrae el estado del editor (foco, texto seleccionado, título del
                documento, estado de guardado), resultados de búsqueda en Docs Home o texto accesible del documento.
              </li>
              <li>
                <strong>2. Mensajes del usuario, partes de conversación y respuestas del agente:</strong> Instrucciones de texto ingresadas por el usuario o seleccionadas desde los chips de consulta rápida, partes del mensaje del turno actual, fragmentos de razonamiento (<code>thoughts</code>), llamadas a herramientas (<code>tools</code>) y respuestas generadas en streaming por el agente.
              </li>
              <li>
                <strong>3. Resultados de acciones y de evaluación de scripts ejecutados en la página:</strong> Resultados técnicos (<code>action_result</code> / <code>eval_result</code>) de las acciones estructuradas (clics, escritura o reemplazo de texto, scroll, espera, extracción o navegación) y de la evaluación de scripts ejecutados en la pestaña activa, devueltos al agente para verificar el cumplimiento de la tarea.
              </li>
              <li>
                <strong>4. Lectura del portapapeles (<code>clipboardRead</code>):</strong> Se utiliza únicamente cuando el agente ejecuta la acción <code>docs_copy_text</code> dentro de un documento de Google Docs (<code>docs.google.com/document/</code>). Tras simular la selección y copiado del documento, lee el texto mediante el documento offscreen (<code>navigator.clipboard.readText()</code>), lo trunca a un máximo de 100 KB y lo envía en el campo <code>copied_text</code> del resultado de la acción al servicio backend de Rainbow Agent para que el asistente procese el contenido del documento.
              </li>
              <li>
                <strong>5. Identificador de usuario e identificadores de sesión:</strong> Al estar en fase beta sin inicio de sesión, no se utilizan cuentas nominales. El identificador de usuario (<code>userId</code>) corresponde exclusivamente al hash criptográfico SHA-256 generado localmente en el navegador por <code>@digi-io/device-sdk</code> al iniciar una conversación. El identificador de cada sesión (<code>sessionId</code>) se genera aleatoriamente mediante <code>crypto.randomUUID()</code>, y cada captura del DOM recibe un identificador efímero de observación (<code>obs_...</code>).
              </li>
              <li>
                <strong>6. Huella del dispositivo mediante <code>@digi-io/device-sdk</code>:</strong> Para
                generar el identificador anónimo <code>userId</code>, la librería <code>@digi-io/device-sdk</code>
                lee localmente en el navegador señales técnicas del entorno: navegador (<code>userAgent</code>,
                <code>platform</code>, <code>vendor</code>), pantalla (<code>width</code>, <code>height</code>,
                <code>colorDepth</code>, <code>pixelRatio</code>), hardware (<code>deviceMemory</code>,
                <code>hardwareConcurrency</code>), huella de renderizado Canvas 2D, proveedor y renderizador
                WebGL, huella de audio (<code>AudioContext</code>), fuentes tipográficas y plugins disponibles,
                soporte táctil, tipos de dispositivos multimedia (<code>kind</code>), zona horaria, idioma e
                indicadores de integridad (modo incógnito, automatización, headless, devTools, emulador y
                entropía). Todas estas señales se procesan únicamente en el navegador del usuario para calcular
                un hash SHA-256 (<code>fingerprint.hash</code>); <strong>las señales detalladas no se envían
                al backend</strong>, enviándose solo el hash resultante como <code>userId</code>.
              </li>
              <li>
                <strong>7. Datos almacenados localmente (<code>chrome.storage</code>, <code>localStorage</code>):</strong>
                Aunque el permiso <code>storage</code> está declarado en el manifiesto, en la versión 0.0.7 no
                se guarda ningún dato en <code>chrome.storage</code>. En <code>window.localStorage</code> del
                contexto de la extensión solo persiste la clave <code>rainbow.promptChips</code> con hasta 10
                sugerencias de prompts recientes seleccionados por el usuario (y se lee la clave <code>token</code>
                por compatibilidad con el ecosistema digi, sin requerirse ni guardarse en fase beta).
              </li>
            </ul>
        </div>

        <div id="how" class="section mb-16 scroll-mt-24">
          <h1 class="text-6xl md:text-4xl font-normal mb-8">Cómo utilizamos tu información</h1>
          <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-8">
            Solicitamos permisos específicos para acceder a tu cuenta de Google Cloud exclusivamente
            con el fin de habilitar funcionalidades de Fireweb, nuestra plataforma basada en la nube.
            Estos permisos se utilizan únicamente para proporcionar y mejorar nuestros servicios.
          </p>
          <ul class="mx-12 text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12" style="list-style-type: disc">
            <li>Autenticar e identificar usuarios.</li>
            <li>Proporcionar y mantener nuestros servicios.</li>
            <li>Mejorar la experiencia del usuario.</li>
            <li>Comunicar actualizaciones, soporte e información relacionada con los servicios.</li>
          </ul>
          <h3 class="text-2xl font-light mb-4 text-[var(--text-secondary)]">Finalidad, base legal y activación bajo demanda en la extensión rainbow</h3>
          <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-6">
            En la extensión <strong>rainbow</strong>, los datos procesados se utilizan exclusivamente para brindar asistencia interactiva en la navegación, responder consultas sobre la página activa y ejecutar las tareas o acciones solicitadas por el usuario en tiempo real. Al encontrarse en fase beta y de pruebas, no se almacenan datos ni conversaciones para creación de perfiles ni entrenamiento persistente. <em>el servidor backend y su infraestructura en la nube conserva registros técnicos temporales de ejecución para diagnóstico o mejora del servicio.</em>
          </p>
          <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12">
            <strong>Base legal y consentimiento (activación exclusiva por el usuario):</strong> El tratamiento
            se basa en el consentimiento expreso del usuario y en la ejecución de las instrucciones solicitadas
            al interactuar con la extensión. <strong>La extensión solo inspecciona el DOM y actúa sobre la
            pestaña cuando el usuario la invoca desde el panel lateral</strong> (al abrir el panel e iniciar una
            conversación, pulsar el botón de inspección o enviar un mensaje). Aunque el script de contenido se
            inyecta en las páginas para estar disponible y el service worker mantiene en memoria local el estado
            de eventos de <code>webNavigation</code> (<code>onBeforeNavigate</code>, <code>onCommitted</code>,
            <code>onCompleted</code>, <code>onErrorOccurred</code>, <code>onHistoryStateUpdated</code>)
            únicamente para detectar si la pestaña cambió de URL o terminó de cargar y marcar la caché local
            como obsoleta, <strong>no existe inspección del contenido de las páginas en segundo plano ni envío
            de datos al backend sin intervención del usuario</strong>.
          </p>
        </div>

        <div id="products" class="section mb-16 scroll-mt-24">
          <h1 class="text-6xl md:text-4xl font-normal mb-8">Políticas específicas por producto</h1>
          <h3 class="text-xl mx-4 font-light mb-4 text-[var(--text-secondary)]">digi Subscriptions</h3>
            <ul class="mx-12 text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12" style="list-style-type: disc">
              <li>Podemos enviarte correos electrónicos promocionales sobre nuestros productos, novedades y actualizaciones.</li>
              <li>Puedes desactivar o reactivar estas comunicaciones promocionales en cualquier momento.</li>
              <li>También enviaremos comunicaciones relacionadas con soporte, mantenimiento o actualizaciones
                importantes del servicio. Estas notificaciones no pueden desactivarse, ya que las consideramos
                esenciales para el correcto funcionamiento de nuestros productos.</li>
            </ul>
            <h3 class="text-xl mx-4 font-light mb-4 text-[var(--text-secondary)]">sky</h3>
            <ul class="mx-12 text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12" style="list-style-type: disc">
              <li>Cualquier archivo reportado bajo la DMCA (digital Millennium Copyright Act) o por posibles infracciones de derechos de autor podrá ser eliminado sin previo aviso.</li>
              <li>Esto incluye cualquier contenido que pueda infringir leyes de propiedad intelectual o derechos de terceros.</li>
            </ul>
            <h3 class="text-xl mx-4 font-light mb-4 text-[var(--text-secondary)]">calendar</h3>
            <ul class="mx-12 text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12" style="list-style-type: disc">
              <li>Podemos enviarte correos electrónicos promocionales sobre nuestros productos, novedades y actualizaciones.</li>
              <li>Puedes desactivar o reactivar estas comunicaciones promocionales en cualquier momento.</li>
              <li>También enviaremos comunicaciones relacionadas con soporte, mantenimiento o actualizaciones
                importantes del servicio. Estas notificaciones no pueden desactivarse, ya que las consideramos
                esenciales para el correcto funcionamiento de nuestros productos.</li>
            </ul>
            <h3 class="text-xl mx-4 font-light mb-4 text-[var(--text-secondary)]">fireweb</h3>
            <ul class="mx-12 text-[var(--text-terceary)] leading-relaxed text-md font-light mb-8" style="list-style-type: disc">
              <li>Tokens generados por Google.</li>
              <li>Tokens de recuperación.</li>
            </ul>
            <p class="text-[var(--text-terceary)] mx-4 leading-relaxed text-md font-light mb-12">El acceso a Google Cloud está limitado estrictamente a las funcionalidades necesarias para la prestación del servicio.</p>
            <h3 class="text-xl mx-4 font-light mb-4 text-[var(--text-secondary)]">contextify</h3>
            <ul class="mx-12 text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12" style="list-style-type: disc">
              <li>Las fuentes de contenido podrán ser eliminadas si se determina que están involucradas en infracciones de derechos de autor o en problemas legales relacionados con propiedad intelectual.</li>
            </ul>
            <h3 class="text-xl mx-4 font-light mb-4 text-[var(--text-secondary)]">care</h3>
            <ul class="mx-12 text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12" style="list-style-type: disc">
              <li>Podemos enviarte correos electrónicos promocionales sobre nuestros productos, novedades y actualizaciones.</li>
              <li>Puedes desactivar o reactivar estas comunicaciones promocionales en cualquier momento.</li>
              <li>También enviaremos comunicaciones relacionadas con soporte, mantenimiento o actualizaciones
                importantes del servicio. Estas notificaciones no pueden desactivarse, ya que las consideramos
                esenciales para el correcto funcionamiento de nuestros productos.</li>
            </ul>
            <h3 class="text-2xl mx-4 font-light mb-4 text-[var(--text-secondary)]">rainbow (Fase Beta)</h3>
            <p class="text-[var(--text-terceary)] mx-4 leading-relaxed text-md font-light mb-6">
              <strong>rainbow</strong> es una extensión de navegador que opera como un agente asistente de IA en el panel lateral de Google Chrome dentro del ecosistema <strong>digi</strong>. Durante su actual fase beta y de testing no requiere inicio de sesión y no almacena de forma persistente datos de los usuarios ni de sus sesiones en bases de datos (lo cual puede cambiar en futuras versiones).
            </p>
            <h4 class="text-xl mx-6 font-light mb-3 text-[var(--text-secondary)]">Minimización, filtrado y protección frente a datos sensibles o de terceros</h4>
            <p class="text-[var(--text-terceary)] mx-6 leading-relaxed text-md font-light mb-4">
              Dado que las páginas web visitadas por el usuario (como documentos, correos, formularios o paneles corporativos) pueden contener datos personales de terceros o información sensible, la extensión aplica medidas automáticas de minimización y filtrado local antes de enviar cualquier contexto al backend:
            </p>
            <ul class="mx-12 text-[var(--text-terceary)] leading-relaxed text-md font-light mb-8 space-y-2" style="list-style-type: disc">
              <li><strong>Ocultación de valores sensibles:</strong> Los valores de campos de tipo contraseña (<code>type="password"</code>) o <code>hidden</code>, así como aquellos cuyo atributo <code>autocomplete</code> coincida con patrones financieros o de seguridad (<code>cc-*</code>, <code>card-*</code>, <code>payment</code>, <code>one-time-code</code>, <code>secret</code>), son reemplazados automáticamente por el marcador <code>[hidden]</code> en el navegador antes de su envío.</li>
              <li><strong>Exclusión de elementos ocultos y atributos riesgosos:</strong> Se descartan elementos no visibles (<code>display: none</code>, <code>visibility: hidden</code>, <code>opacity: 0</code>), manejadores de eventos inline (<code>onclick</code>, <code>oninput</code>, <code>onsubmit</code>, etc.), URLs en formato <code>data:</code> o <code>blob:</code> y atributos que superen los límites de tamaño.</li>
              <li><strong>Truncamiento y límites de volumen:</strong> Se envían únicamente elementos interactivos priorizados hasta un máximo por defecto de 150 elementos por observación, truncando nombres accesibles y valores de campos a 300 caracteres (y textos de barrido inicial a 100 caracteres), texto visible a 8.000 caracteres, lecturas de portapapeles en Google Docs a 100 KB y solicitudes compactas a un límite objetivo de 50 KB (máximo 200 KB).</li>
              <li><strong>Caché de observaciones y compactación de mensajes:</strong> La extensión separa el historial visual de la interfaz de las peticiones al servidor; no reenvía cadenas de razonamiento (<code>thoughts</code>), trazas completas de visualización ni instantáneas del DOM de turnos previos, y si la página no ha cambiado reutiliza únicamente la referencia <code>observation_id</code> en caché (modo <code>unchanged_observation</code>).</li>
              <li><strong>Confirmación en acciones de reemplazo riesgosas:</strong> En documentos de Google Docs, las acciones de escritura en modo reemplazo (<code>mode: 'replace'</code>) requieren confirmación explícita mediante un cuadro de diálogo en la página antes de ejecutarse.</li>
            </ul>
            <h4 class="text-xl mx-6 font-light mb-3 text-[var(--text-secondary)]">Permisos de Chrome declarados y su justificación</h4>
            <p class="text-[var(--text-terceary)] mx-6 leading-relaxed text-md font-light mb-4">
              A continuación se explica en un párrafo cada uno de los permisos declarados por la extensión <strong>rainbow</strong> y por qué se solicita:
            </p>
            <div class="mx-6 space-y-4 text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12">
              <p>
                <strong><code>storage</code>:</strong> Declarado en el manifiesto para permitir a la extensión gestionar preferencias o estados locales en el almacenamiento propio de Chrome. En la versión actual v0.0.7 no se realiza ninguna lectura ni escritura mediante la API <code>chrome.storage</code> (el permiso se mantiene reservado para futuras opciones de configuración local), utilizándose únicamente <code>window.localStorage</code> del contexto de la extensión para conservar localmente hasta 10 sugerencias de consultas rápidas (<code>rainbow.promptChips</code>).
              </p>
              <p>
                <strong><code>activeTab</code>:</strong> Se solicita para otorgar a la extensión acceso temporal a la pestaña que tienes activa en primer plano cuando interactúas con el asistente. Este permiso permite identificar la página actual, inspeccionar sus elementos interactivos y ejecutar las acciones solicitadas por ti sobre dicha pestaña sin afectar a otras pestañas ni páginas internas restringidas del navegador (como <code>chrome://</code>, <code>edge://</code>, <code>about:</code>, <code>devtools://</code> o la Chrome Web Store).
              </p>
              <p>
                <strong><code>tabs</code>:</strong> Se utiliza para consultar cuál es la pestaña activa de la ventana actual o enfocada (<code>chrome.tabs.query</code>) y obtener su URL y título, enviar mensajes internos de inspección o ejecución de acciones al script de contenido de esa pestaña (<code>chrome.tabs.sendMessage</code>), y actualizar la URL de la pestaña (<code>chrome.tabs.update</code>) cuando pides explícitamente al agente navegar hacia una dirección web.
              </p>
              <p>
                <strong><code>scripting</code>:</strong> Permite inyectar dinámicamente el script de contenido o ejecutar funciones de captura de instantáneas del DOM e interacción en la pestaña activa (<code>chrome.scripting.executeScript</code>). Se emplea como mecanismo de respaldo cuando una pestaña estaba abierta antes de iniciar la extensión y necesita cargar el script de contenido, o cuando el agente requiere evaluar un script de acción en el contexto principal (<code>MAIN</code>) de la página.
              </p>
              <p>
                <strong><code>sidePanel</code>:</strong> Es necesario para alojar y mostrar la interfaz conversacional principal de <strong>rainbow</strong> dentro del panel lateral nativo de Google Chrome (<code>src/sidepanel/sidepanel.html</code>), abriéndose cuando haces clic en el icono de la extensión en la barra de herramientas (<code>chrome.sidePanel.open</code>) para que puedas interactuar con el asistente mientras navegas.
              </p>
              <p>
                <strong><code>debugger</code>:</strong> Se utiliza a través del protocolo Chrome DevTools Protocol
                (CDP 1.3) exclusivamente en dos situaciones técnicas puntuales donde las APIs convencionales son
                bloqueadas por la página: primero, como mecanismo de respaldo (<code>Runtime.evaluate</code>) para la
                evaluación de scripts de acción en páginas cuya Política de Seguridad de Contenidos (CSP) restrictiva
                bloquea <code>eval</code> / <code>unsafe-eval</code>; y segundo, para despachar eventos de entrada
                confiables a nivel de navegador (<code>Input.insertText</code>, <code>Input.dispatchKeyEvent</code>,
                <code>Input.dispatchMouseEvent</code>) al escribir texto en editores basados en <code>&lt;canvas&gt;</code>
                como Google Docs. El depurador se adjunta (<code>chrome.debugger.attach</code>) solo durante el instante
                en que se ejecuta la acción y se desconecta de inmediato al finalizar (<code>chrome.debugger.detach</code>).
              </p>
              <p>
                <strong><code>webNavigation</code>:</strong> Permite al trabajador en segundo plano (<code>navigationTracker.ts</code>) detectar eventos del ciclo de vida de navegación del marco principal de una pestaña (<code>onBeforeNavigate</code>, <code>onCommitted</code>, <code>onCompleted</code>, <code>onErrorOccurred</code> y <code>onHistoryStateUpdated</code> en aplicaciones SPA). Se usa únicamente para saber cuándo ha finalizado una carga de página tras una acción del agente y para marcar en la memoria volátil local si la observación del DOM en caché quedó obsoleta, sin almacenar ni transmitir tu historial de navegación.
              </p>
              <p>
                <strong><code>offscreen</code>:</strong> Permite crear un documento técnico sin interfaz visual (<code>src/offscreen/offscreen.html</code>) con la justificación <code>CLIPBOARD</code>. Dado que en la arquitectura Manifest V3 de Chrome el service worker en segundo plano no tiene acceso al DOM ni a la API <code>navigator.clipboard</code>, este documento offscreen aislado es indispensable como intermediario técnico cuando se requiere leer el portapapeles durante una acción en Google Docs.
              </p>
              <p>
                <strong><code>clipboardRead</code>:</strong> Autoriza la lectura del texto del portapapeles del sistema a través del documento offscreen (<code>navigator.clipboard.readText()</code>). En el código de la extensión, este permiso está estrictamente acotado y solo se invoca cuando el agente ejecuta la acción <code>docs_copy_text</code> dentro de un documento de Google Docs (<code>docs.google.com/document/</code>) tras seleccionar y copiar el texto del documento para poder leerlo o resumirlo según tu instrucción.
              </p>
              <p>
                <strong>Permisos de host (<code>&lt;all_urls&gt;</code>) e inyección de <code>content_scripts</code>:</strong> La declaración de <code>&lt;all_urls&gt;</code> y la inyección del script de contenido (<code>src/content/content.ts</code>) en todas las URLs permiten que el asistente funcione en cualquier sitio o aplicación web donde decidas invocarlo, sin limitarse a un único dominio. Aunque el script de contenido se inyecta al cargar las páginas, permanece en espera pasiva escuchando únicamente mensajes internos de la extensión y no lee el DOM ni ejecuta acciones a menos que tú actives una sesión o instrucción desde el panel lateral.
              </p>
            </div>
        </div>
        <div id="share" class="section mb-16 scroll-mt-24">
          <h1 class="text-6xl md:text-4xl font-normal mb-8">Compartición de información</h1>
          <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-8">
            No vendemos, alquilamos ni compartimos información personal con terceros, salvo cuando sea necesario para:
          </p>
          <ul class="mx-12 text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12" style="list-style-type: disc">
            <li>Cumplir con obligaciones legales.</li>
            <li>Hacer cumplir nuestros Términos de Servicio.</li>
            <li>Proteger los derechos, la seguridad y la integridad de digi Systems, sus usuarios o terceros.</li>
          </ul>
          <h3 class="text-2xl font-light mb-4 text-[var(--text-secondary)]">Destinatarios y transferencias internacionales en la extensión rainbow</h3>
          <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-4">
            Cuando utilizas la extensión <strong>rainbow</strong>, los datos de la sesión activa se transmiten mediante conexiones cifradas HTTPS exclusivamente al siguiente destinatario técnico dentro del ecosistema <strong>digi</strong>:
          </p>
        </div>
        <div id="security" class="section mb-16 scroll-mt-24">
          <h1 class="text-6xl md:text-4xl font-normal mb-8">Seguridad de los datos</h1>
          <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-8">
            Implementamos medidas técnicas y organizativas adecuadas para proteger tu información
            frente a accesos no autorizados, alteraciones, divulgación o destrucción.
            Sin embargo, ningún método de transmisión o almacenamiento es completamente seguro,
            por lo que no podemos garantizar una seguridad absoluta.
          </p>
          <h3 class="text-2xl font-light mb-4 text-[var(--text-secondary)]">
            Retención y eliminación de datos
          </h3>
          <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12">
            Conservamos los datos personales asociados a nuestras plataformas web únicamente durante el tiempo
            necesario para cumplir con las finalidades descritas en esta política o según lo exija la ley. En lo que
            respecta a la extensión <strong>rainbow</strong>, la extensión no requiere
            cuenta de usuario y <strong>no guarda ningún tipo de dato de conversación ni de páginas visitadas en
            bases de datos persistentes</strong>. En tu dispositivo, el estado de la conversación y la caché
            de observaciones del DOM (con tiempo de vida máximo de 5 minutos en memoria) se eliminan de inmediato al
            cerrar el panel lateral, iniciar una nueva conversación ("New") o cerrar el navegador; las sugerencias
            recientes guardadas en <code>localStorage</code> (<code>rainbow.promptChips</code>) permanecen únicamente
            en tu navegador y se eliminan al borrar los datos de la extensión o desinstalarla.
          </p>
        </div>
        <div id="rights" class="section mb-16 scroll-mt-24">
          <h1 class="text-6xl md:text-4xl font-normal mb-8">Tus derechos</h1>
          <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-8">
            Como titular de los datos (conforme a la normativa aplicable, incluyendo el régimen de protección de datos
            personales de Colombia —Ley 1581 de 2012— y estándares internacionales como el RGPD cuando resulten
            aplicables), tienes derecho a:
          </p>
          <ul class="mx-12 text-[var(--text-terceary)] leading-relaxed text-md font-light mb-8" style="list-style-type: disc">
            <li><strong>Acceso:</strong> Conocer y consultar los datos personales que sean objeto de tratamiento.</li>
            <li><strong>Rectificación y actualización:</strong> Solicitar la corrección de datos parciales, inexactos o incompletos.</li>
            <li><strong>Supresión (eliminación):</strong> Solicitar la eliminación de tu cuenta y de los datos asociados, o suprimir localmente cualquier dato de la extensión.</li>
            <li><strong>Oposición y revocación del consentimiento:</strong> Oponerte al tratamiento de tus datos o revocar en cualquier momento los permisos otorgados (a través de tu cuenta de Google o de la configuración de extensiones de Chrome).</li>
          </ul>
          <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12">
            Para ejercer tus derechos de acceso, rectificación, supresión u
            oposición ante <strong>digi</strong> como responsable del tratamiento, puedes enviar una solicitud en
            cualquier momento al correo electrónico
            <a href="mailto:support@digiapps.com.co" class="text-[var(--color-primary)] hover:underline">support@digiapps.com.co</a>.
          </p>
        </div>
        <div id="changes" class="section mb-16 scroll-mt-24">
          <h1 class="text-6xl md:text-4xl font-normal mb-8">Cambios en esta política</h1>
          <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12">
            Podemos actualizar esta Política de Privacidad periódicamente, en particular a medida que nuestros servicios evolucionen hacia nuevas versiones.
            Los cambios importantes serán comunicados a través de nuestro sitio web o mediante otros canales apropiados, indicando siempre la fecha de última actualización.
          </p>
        </div>

        <div id="contact" class="section mb-24 scroll-mt-24">
          <h1 class="text-6xl md:text-4xl font-normal mb-8">Contacto</h1>
            <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-8">Si tiene alguna pregunta, inquietud o solicitud para ejercer sus derechos con respecto a esta Política de Privacidad o al tratamiento de datos realizado por <strong>digi</strong>, por favor contáctenos en:</p>
            <div class="space-y-1">
              <p class="text-[var(--text-terceary)] leading-relaxed text-md font-regular">Responsable del tratamiento: <strong>digi</strong> — Equipo de Privacidad de <strong>digiapps</strong> Systems</p>
              <a href="mailto:support@digiapps.com.co" class="text-[var(--color-primary)] hover:underline text-lg">support@digiapps.com.co</a>
              <p class="text-[var(--text-terceary)] leading-relaxed text-sm font-light pt-2">Última actualización: 24 de octubre de 2026</p>
            </div>
        </div>

        <footer class="pt-12">
          <p class="text-sm text-[var(--text-terceary)] font-light">
            Al utilizar nuestros servicios, usted reconoce que ha leído y comprendido esta Política de Privacidad y acepta sus términos.
          </p>
        </footer>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue';

const firewebLink = ref(process.env.VUE_APP_URL_DG_FIREWEB_APP);
const activeSection = ref('intro');

const groups = [
  {
    title: 'Términos y condiciones',
    sections: [
      { id: 'intro', title: 'Introducción' },
      { id: 'collect', title: 'Tu relación con digiapps' },
      { id: 'usage', title: 'Usar los servicios de digiapps' },
    ],
  },
  {
    title: 'Política de privacidad',
    sections: [
      { id: 'intro2', title: 'Introducción' },
      { id: 'info', title: 'Información que recopilamos' },
      { id: 'how', title: 'Cómo utilizamos tu información' },
      { id: 'products', title: 'Políticas específicas por producto' },
      { id: 'share', title: 'Compartición de información' },
      { id: 'security', title: 'Seguridad de los datos' },
      { id: 'rights', title: 'Tus derechos' },
      { id: 'changes', title: 'Cambios en esta política' },
      { id: 'contact', title: 'Contacto' },
    ],
  },
];

const usageItems = [
  'Para autenticar e identificar a los usuarios en nuestra plataforma.',
  'Para proporcionar y mantener nuestros servicios, incluidas las funcionalidades de Fireweb.',
  'Para mejorar la experiencia del usuario personalizando las funciones y el contenido.',
  'Para comunicarnos con usted en relación con actualizaciones, servicios y soporte.',
];

const sharingItems = [
  'Cumplir con las obligaciones legales.',
  'Hacer cumplir nuestros Términos de servicio.',
  'Proteger los derechos, la privacidad, la seguridad o la propiedad de <strong>digiapps</strong> Systems, de usted o de otros.',
];

const userRights = [
  {
    title: 'Acceso y rectificación',
    description: 'Puede solicitar el acceso a los datos personales que tenemos sobre usted y solicitar correcciones de datos inexactos o incompletos.',
  },
  {
    title: 'Revocación de permisos',
    description: 'Puede revocar los permisos otorgados a <strong>digiapps</strong> Systems a través de la configuración de su cuenta de Google en cualquier momento.',
  },
  {
    title: 'Eliminación de cuenta',
    description: 'Puede solicitar la eliminación de su cuenta y los datos asociados de nuestros sistemas.',
  },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

let observer: IntersectionObserver | null = null;

onMounted(() => {
  window.scrollTo(0, 0);

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0,
  });

  groups.forEach((group) => {
    group.sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer?.observe(el);
    });
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.section {
  transition: opacity 0.3s ease;
}

/* Custom scrollbar for better look */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #cbd5e1;
}
</style>
