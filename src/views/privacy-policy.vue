<template>
  <div class="bg-white p-4">
    <h1 class="text-2xl font-semibold mb-4">Privacy Policy</h1>
    <p class="mb-4">
      At Digi Systems, we are committed to protecting your privacy.
      This Privacy Policy explains how we collect, use,
      and safeguard your information when you use our services.
      By using our website and services, you agree to the terms outlined in this policy.
    </p>

    <h2 class="text-xl font-semibold mt-6 mb-4">Information We Collect</h2>

    <h3 class="text-lg font-medium mt-4">Google OAuth Data</h3>
    <p class="mb-4">
      When you log in to our website using Google OAuth,
      we collect the following information from your Google account:
    </p>
    <ul class="list-disc list-inside mb-4">
      <li>Email Address</li>
      <li>Name</li>
      <li>Google ID</li>
    </ul>
    <p>This information is stored securely in our database.</p>

    <h3 class="text-lg font-medium mt-4">Permissions for Google Cloud</h3>
    <p class="mb-4">
      We request specific permissions to access your Google Cloud account
      exclusively for the purpose of enabling functionalities in
      <a
        :href="firewebLink"
        target="_blank"
        class="text-blue-600 hover:underline"
      >
        Fireweb
      </a>,
      our cloud-based platform.
      These permissions are used solely to provide and improve our services.
    </p>

    <h2 class="text-xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
    <p class="mb-4">We use the information we collect for the following purposes:</p>
    <ol class="list-decimal list-inside mb-4">
      <li>To authenticate and identify users on our platform.</li>
      <li>To provide and maintain our services, including <a
        :href="firewebLink"
        target="_blank"
        class="text-blue-600 hover:underline"
      >
        Fireweb
      </a> functionalities.</li>
      <li>To improve user experience by personalizing features and content.</li>
      <li>To communicate with you regarding updates, services, and support.</li>
    </ol>

    <h2 class="text-xl font-semibold mt-6 mb-4">Sharing Your Information</h2>
    <p class="mb-4">
      We do not sell, rent, or share your personal information
      with third parties except as necessary to:
    </p>
    <ul class="list-disc list-inside mb-4">
      <li>Comply with legal obligations.</li>
      <li>Enforce our Terms of Service.</li>
      <li>Protect the rights, privacy, safety, or property of Digi Systems, you, or others.</li>
    </ul>

    <h2 class="text-xl font-semibold mt-6 mb-4">Data Security</h2>
    <p class="mb-4">
      We take the security of your data seriously and implement appropriate technical and
      organizational measures to protect it against unauthorized access,
      alteration, disclosure, or destruction.
      However, no method of transmission or storage is 100% secure,
      and we cannot guarantee absolute security.
    </p>

    <h2 class="text-xl font-semibold mt-6 mb-4">Your Choices</h2>
    <p class="mb-4">You have the following rights regarding your data:</p>
    <ul class="list-disc list-inside mb-4">
      <li>
        <span class="font-medium">Access and Correction:</span>
        You can request access to the personal data we hold about you and request corrections
        to inaccurate or incomplete data.
      </li>
      <li>
        <span class="font-medium">Revocation of Permissions:</span>
        You can revoke permissions granted to Digi Systems through your Google account settings
        at any time.
      </li>
      <li>
        <span class="font-medium">Account Deletion:</span>
        You can request the deletion of your account and associated data from our systems.
      </li>
    </ul>

    <h2 class="text-xl font-semibold mt-6 mb-4">Changes to This Privacy Policy</h2>
    <p class="mb-4">
      We may update this Privacy Policy from time to time.
      We encourage you to review this policy periodically to stay informed
      about how we are protecting your information.
      Significant changes will be communicated through our website or directly to you.
    </p>

    <h2 class="text-xl font-semibold mt-6 mb-4">Contact Us</h2>
    <p class="mb-4">
      If you have any questions, concerns, or requests regarding this Privacy Policy,
      please contact us at:
    </p>

    <p class="mb-4">
      <span class="font-medium">Digi Systems Privacy Team</span><br>
      Email:
      <a
        href="mailto:privacy@digiapps.com.co"
        class="text-blue-600 hover:underline"
      >privacy@digiapps.com.co</a>
    </p>

    <hr class="my-8">

    <p class="text-sm text-gray-500">
      By using our services, you acknowledge that you have read and understood
      this Privacy Policy and agree to its terms.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const firewebLink = ref(process.env.VUE_APP_URL_DG_FIREWEB_APP);

</script>
