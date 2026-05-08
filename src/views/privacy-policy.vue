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
          <h1 class="text-6xl md:text-4xl font-normal mb-8">Introducción</h1>
            <span class="text-[var(--text-secondary)] italic font-light text-sm">
            "Sabemos que es tentador saltarse estos Términos del Servicio, pero es importante
            entender qué puedes esperar de nosotros al usar los servicios de <strong>digiApps</strong>
            y qué esperamos nosotros de ti."</span><br><br>
            <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12">
            Sabemos que puede ser tentador omitir estos Términos del Servicio, pero es
            importante comprender las condiciones bajo las cuales puedes acceder y utilizar los servicios de <strong>digiApps</strong>.<br><br>

            En <strong>digiApps</strong> desarrollamos herramientas, aplicaciones y soluciones tecnológicas orientadas a facilitar procesos,
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
          <h1 class="text-6xl md:text-4xl font-normal mb-8">Tu relación con digiApps</h1>
            <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12">
              Estos términos ayudan a definir tu relación con <strong>digiApps</strong>. Cuando hablamos de “Digi”,
              “nosotros”, “nos” o “nuestro”, nos referimos a <strong>digiApps</strong>, sus plataformas, aplicaciones,
              servicios y cualquier tecnología asociada que ponemos a tu disposición.<br><br>

              Te otorgamos un permiso limitado, no exclusivo y revocable para acceder y utilizar
              nuestros servicios, condicionado al cumplimiento de estos términos y de cualquier
              política adicional aplicable. Este permiso no implica la transferencia de ningún
              derecho de propiedad sobre los servicios.<br><br>

              Estos términos reflejan la forma en que operamos, desarrollamos y mantenemos nuestros servicios,
              así como las condiciones bajo las cuales se ofrece el acceso a los mismos.<br><br>

              El uso de nuestros servicios establece una relación continua sujeta al cumplimiento de estas condiciones.
              En caso de incumplimiento, <strong>digiApps</strong> podrá limitar, suspender o cancelar el acceso a los servicios
              conforme a lo establecido en estos términos.<br><br>

              Algunos servicios pueden estar sujetos a condiciones adicionales específicas, las cuales complementan y
              forman parte integral de este acuerdo.<br><br>
            </p>
            <h2 class="text-3xl font-normal mb-8">Qué puedes esperar de digiApps</h2>
            <h3 class="text-2xl font-light mb-4 text-[var(--text-secondary)]"> 1. Ofrecer una gama de servicios útiles</h3>
              <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-4">
                <strong>digiApps</strong> ofrece una gama de servicios sujetos a estos términos, que pueden incluir:
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
                  Algunos servicios de <strong>digiApps</strong> permiten subir, almacenar, compartir o procesar contenido. No estás obligado a proporcionar contenido, y puedes decidir qué compartir.<br><br>
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
                  Para poder operar y mejorar los servicios, otorgas a <strong>digiApps</strong> una licencia sobre tu contenido.
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
                  Te permite usar, copiar, modificar, distribuir y mostrar tu contenido en relación con los servicios de <strong>digiApps</strong>, incluyendo marketing y promoción.
                </p>
                <h3 class="text-2xl font-regular mb-4 text-[var(--text-secondary)]">
                  Derechos otorgados
                </h3>
                <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-4">
                  La licencia permite a <strong>digiApps</strong>:
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
          <h1 class="text-6xl md:text-4xl font-normal mb-12">Uso de los servicios de digiApps</h1>
           <h2 class="text-3xl font-light mb-8">Tu cuenta de digiApps</h2>
            <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12">
              Si cumples con los requisitos de edad mínima aplicables, puedes crear una cuenta en Digi. Algunos servicios requieren obligatoriamente una cuenta para funcionar correctamente.<br><br>
              Eres responsable de toda la actividad que se realice desde tu cuenta. Esto incluye mantener la confidencialidad de tus credenciales de acceso y adoptar medidas razonables de seguridad para protegerla.<br><br>
              Digi no será responsable por accesos no autorizados derivados del uso indebido de tus credenciales, salvo en los casos previstos por la legislación aplicable.<br><br>
            </p>
            <h3 class="text-2xl font-regular mb-4 text-[var(--text-secondary)]">Uso de los servicios en nombre de una organización</h3>
            <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-4">
              Organizaciones como empresas, instituciones educativas u otras entidades pueden utilizar los servicios de Digi.<br><br>
              Si utilizas los servicios en nombre de una organización:
            </p>
            <ul class="mx-12 text-[var(--text-terceary)] leading-relaxed text-md font-light mb-12" style="list-style-type: disc">
              <li>Debes contar con autorización para aceptar estos términos en su nombre</li>
              <li>La organización puede asignarte una cuenta</li>
              <li>El administrador de la organización puede establecer reglas adicionales de uso</li>
              <li>El administrador puede gestionar, suspender o acceder a la cuenta conforme a sus políticas internas y la normativa aplicable</li>
            </ul>
            <h3 class="text-2xl font-regular mb-4 text-[var(--text-secondary)]">Comunicaciones relacionadas con el servicio</h3>
            <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-12">
              Para operar y mejorar nuestros servicios, Digi puede enviarte comunicaciones relacionadas con el funcionamiento de la plataforma, incluyendo notificaciones técnicas, actualizaciones, alertas de seguridad o información relevante sobre el servicio.<br><br>
              Puedes encontrar más detalles sobre cómo gestionamos estas comunicaciones en nuestra Política de Privacidad.
            </p>
            <h3 class="text-2xl font-regular mb-4 text-[var(--text-secondary)]">Comentarios y sugerencias</h3>
            <p class="text-[var(--text-terceary)] leading-relaxed text-md font-light mx-6 mb-4">
              Si decides enviarnos comentarios, sugerencias o propuestas de mejora, Digi podrá utilizarlos para desarrollar, mejorar o modificar los servicios sin que ello genere obligación de compensación, reconocimiento o respuesta hacia ti.
            </p>
        </div>

        <div id="sharing" class="section mb-16 scroll-mt-24">
          <h2 class="text-2xl font-semibold mb-6">Compartir su información</h2>
          <p class="text-gray-500 mb-4">
            No vendemos, alquilamos ni compartimos su información personal con terceros, excepto cuando sea necesario para:
          </p>
          <ul class="space-y-3 text-gray-500">
            <li v-for="item in sharingItems" :key="item" class="flex gap-3">
              <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>

        <div id="security" class="section mb-16 scroll-mt-24">
          <h2 class="text-2xl font-semibold mb-6">Seguridad de los datos</h2>
          <div class="bg-blue-500/5 border border-blue-500/10 p-6 rounded-2xl">
            <p class="text-gray-500 leading-relaxed">
              Nos tomamos muy en serio la seguridad de sus datos e implementamos las medidas técnicas y organizativas adecuadas para protegerlos contra el acceso, la alteración, la divulgación o la destrucción no autorizados. Sin embargo, ningún método de transmisión o almacenamiento es 100% seguro y no podemos garantizar una seguridad absoluta.
            </p>
          </div>
        </div>

        <div id="rights" class="section mb-16 scroll-mt-24">
          <h2 class="text-2xl font-semibold mb-6">Sus derechos</h2>
          <div class="space-y-6">
            <div v-for="right in userRights" :key="right.title" class="group">
              <h3 class="text-lg font-medium mb-2 group-hover:text-blue-500 transition-colors">{{ right.title }}</h3>
              <p class="text-gray-500 leading-relaxed">{{ right.description }}</p>
            </div>
          </div>
        </div>

        <div id="changes" class="section mb-16 scroll-mt-24">
          <h2 class="text-2xl font-semibold mb-6">Cambios en esta política</h2>
          <p class="text-gray-500 leading-relaxed">
            Podemos actualizar esta Política de Privacidad de vez en cuando. Le recomendamos que revise esta política periódicamente para mantenerse informado sobre cómo protegemos su información. Los cambios significativos se comunicarán a través de nuestro sitio web o directamente a usted.
          </p>
        </div>

        <div id="contact" class="section mb-24 scroll-mt-24">
          <h2 class="text-2xl font-semibold mb-6">Contacto</h2>
          <div class="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/10">
            <p class="text-gray-500 mb-6">Si tiene alguna pregunta, inquietud o solicitud con respecto a esta Política de Privacidad, por favor contáctenos en:</p>
            <div class="space-y-1">
              <p class="font-semibold">Equipo de Privacidad de <strong>digiApps</strong> Systems</p>
              <a href="mailto:support@digiapps.com.co" class="text-blue-500 hover:underline text-lg">support@digiapps.com.co</a>
            </div>
          </div>
        </div>

        <footer class="pt-12 border-t border-[var(--border)]">
          <p class="text-sm text-gray-400">
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
      { id: 'collect', title: 'Tu relación con digiApps' },
      { id: 'usage', title: 'Usar los servicios de digiApps' },
    ],
  },
  {
    title: 'Política de privacidad',
    sections: [
      { id: 'sharing', title: 'Compartir información' },
      { id: 'security', title: 'Seguridad' },
      { id: 'rights', title: 'Sus derechos' },
      { id: 'changes', title: 'Cambios' },
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
  'Proteger los derechos, la privacidad, la seguridad o la propiedad de <strong>digiApps</strong> Systems, de usted o de otros.',
];

const userRights = [
  {
    title: 'Acceso y rectificación',
    description: 'Puede solicitar el acceso a los datos personales que tenemos sobre usted y solicitar correcciones de datos inexactos o incompletos.',
  },
  {
    title: 'Revocación de permisos',
    description: 'Puede revocar los permisos otorgados a <strong>digiApps</strong> Systems a través de la configuración de su cuenta de Google en cualquier momento.',
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
