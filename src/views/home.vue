<template>
  <div class="font-sans">
    <!-- Hero Section -->
    <section class="bg-[var(--bg)] text-[var(--text)]">
      <div class="relative w-full h-full">
        <canvas
          ref="canvas"
          class="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
          style="background: transparent"
        ></canvas>
            <!-- Contenido sobre el canvas -->
        <div class="container flex flex-col z-10 mx-auto items-center justify-center mt-36">
          <div class="flex items-center justify-center mb-6">
            <img
                  src="/img/logo-digi.svg"
                  alt="Digi Systems Logo"
                  class="h-8">
            <span class="ml-3 text-lg opacity-50 font-thin font-sans"></span>
          </div>
          <h1 class="text-8xl font-semibold text-[var(--text)]">Enter Orbit</h1>
          <h1 class="text-6xl font-light text-[var(--text-secondary)]">reach new heights</h1>
          <p class="mt-10 text-lg text-[var(--text-secondary)]">
            Empowering healthcare, education, and storage with complete solutions
          </p>
          <p class="mt-2 text-lg text-[var(--text-secondary)]">
          Empowering healthcare, education, and storage with complete solutions
          </p>
          <a
                href="#products"
                class="mt-10 inline-block bg-[#F83B66] text-white
                  py-2 px-6 rounded-full hover:border-[#FF3374] hover:bg-[#FF3374]
                  hover:ring-4 hover:ring-[#FF3374]/50
                  transition ease-in duration-150
                  ">
                  Explore Products
          </a>
        </div>
        <div ref="track" class="overflow-hidden mt-20 mx-auto w-[800px] border">
          <div ref="inner" class="flex gap-16">
            <img src="/img/logo-digi-gray.svg" alt="01" class="h-6 shrink-0" />
    <img src="/img/logo-fireweb-gray.svg" alt="01" class="h-6 shrink-0" />
    <img src="/img/logo-utils-gray.svg" alt="01" class="h-6 shrink-0" />
    <img src="/img/logo-orbeat-gray.svg" alt="01" class="h-6 shrink-0" />
    <img src="/img/logo-care-gray.svg" alt="01" class="h-6 shrink-0" />
    <img src="/img/logo-orbeat-gray.svg" alt="01" class="h-6 shrink-0" />
        </div>
        </div>
    <!-- Products Section -->
    <div id="products" class="container mx-auto px-4 mt-24">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 z-50">
        <!-- Digi-Care -->
        <div class="bg-[var(--bg)] border border-[var(--border)]
          shadow-lg rounded-lg p-6 text-center">
          <h3 class="text-xl font-bold mb-4">Digi-Care Health System</h3>
          <p class="text-gray-600 mb-4">
            Comprehensive healthcare solutions designed to
            streamline medical services and patient care.
          </p>
          <a
            :href="careAppLink"
            target="_blank"
            class="bg-[#F83B66] text-white py-2 px-4 rounded hover:bg-pink-500"
          >
            Learn More
          </a>
        </div>

        <!-- Digi-Edu -->
        <div class="bg-[var(--bg)] border border-[var(--border)]
          shadow-lg rounded-lg p-6 text-center">
          <h3 class="text-xl font-bold mb-4">Digi-Edu Courses</h3>
          <p class="text-gray-600 mb-4">
            Empowering education through online courses, learning modules,
            and certification programs.
          </p>
          <a
            :href="eduAppLink"
            target="_blank"
            class="bg-[#F83B66] text-white py-2 px-4 rounded hover:bg-pink-500"
          >
            Learn More
          </a>
        </div>

        <!-- Digi-Storage -->
        <div class="bg-[var(--bg)] border border-[var(--border)]
          shadow-lg rounded-lg p-6 text-center">
          <h3 class="text-xl font-bold mb-4">Digi-Storage File Storage</h3>
          <p class="text-gray-600 mb-4">
            Secure cloud storage solutions to store, manage,
            and share files with ease and reliability.
          </p>
          <a
            :href="storageAppLink"
            class="bg-[#F83B66] text-white py-2 px-4 rounded hover:bg-pink-500"
          >
            Learn More
          </a>
        </div>

        <!-- fireweb -->
        <div class="bg-[var(--bg)] border border-[var(--border)]
        shadow-lg rounded-lg p-6 text-center">
          <h3 class="text-xl font-bold mb-4">Fireweb</h3>
          <p class="text-gray-600 mb-4">
            A web-based application for managing
            firestore databases using a user-friendly interface.
          </p>
          <a
            :href="firewebLink"
            target="_blank"
            class="bg-[#F83B66] text-white py-2 px-4 rounded hover:bg-pink-500"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
    </div>
    </section>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable */
import { onMounted, onBeforeUnmount, ref, watch } from "vue";

const careAppLink = ref(process.env.VUE_APP_URL_DG_CARE_APP);
const eduAppLink = ref(process.env.VUE_APP_URL_DG_EDU_APP);
const firewebLink = ref(process.env.VUE_APP_URL_DG_FIREWEB_APP);
const storageAppLink = ref(process.env.VUE_APP_URL_DG_STORAGE_APP);

const props = defineProps({
  color: {
    type: String,
    default: "#F83B66" // color dorado original
  }
});

const canvas = ref(null);

function hexToRgb(hex) {
  hex = hex.replace("#", "").trim();

  if (hex.length === 3) {
    hex = hex.split("").map(c => c + c).join("");
  }

  const bigint = parseInt(hex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

function parseColor(color) {
  color = color.trim();

  if (color.startsWith("#")) return hexToRgb(color);

  if (color.startsWith("rgb")) {
    const nums = color.match(/\d+/g).map(Number);
    return { r: nums[0], g: nums[1], b: nums[2] };
  }

  // fallback
  return { r: 255, g: 255, b: 255 };
}

onMounted(() => {
  const c = canvas.value;
  const ctx = c.getContext("2d");

  let w, h, ny, nx, n;
  const d = 40;

  let mx = -100;
  let my = -100;

  let dots = [];
  let canvasData;
  let alphaindexes = [];

  const drag = 0.01;
  const pow = 0.04;

  let currentColor = parseColor(props.color);

  class Fly {
    constructor(x, y) {
      this.vx = 0;
      this.vy = 0;
      this.x = x;
      this.y = y;
      this.c = 0;
    }

    draw(canvasData) {
      const ix = Math.floor(this.x);
      const iy = Math.floor(this.y);

      let i = -6;
      let j = -6;

      const mdm = Math.hypot(mx - this.x, my - this.y);
      let a = Math.pow(2, -0.0002 * mdm * mdm);

      if (this.c && a < 0.2) {
        a = 0.2;
        this.c -= 1;
      } else if (!this.c && Math.random() > 0.9997) {
        this.c = 100;
      }

      if (a < 0.01) return;

      for (let t = 0; t < 169; t++) {
        const ox = ix + i;
        const oy = iy + j;

        const dx = ox - this.x;
        const dy = oy - this.y;

        const dm = dx * dx + dy * dy;
        const alpha =
          (1 - Math.sqrt(dm) / 7) * 100 +
          Math.max((2 - Math.sqrt(dm)) * 255, 0);

        if (alpha > 0 && ox < w && ox > 0) {
          const ind = (ox + oy * w) * 4 + 3;
          canvasData.data[ind] += alpha * a;
          alphaindexes.push(ind);
        }

        j++;
        if (j === 7) {
          j = -6;
          i++;
        }
      }
    }

    compute() {
      const dx = this.x - mx;
      const dy = this.y - my;
      const dm = Math.sqrt(dx * dx + dy * dy);

      const a = pow * Math.pow(2, -0.0002 * dm * dm);

      this.vx += (Math.random() * 0.1 - 0.05) - drag * this.vx - (a * dx) / dm;
      this.vy += (Math.random() * 0.1 - 0.05) - drag * this.vy - (a * dy) / dm;

      this.x = (this.x + this.vx) % w;
      this.y = (this.y + this.vy) % h;

      if (this.x < 0) this.x += w;
      if (this.y < 0) this.y += h;
    }
  }

  function fillBackgroundColor() {
    const { r, g, b } = currentColor;

    for (let s = 0; s < w * h; s++) {
      canvasData.data[s * 4 + 0] = r;
      canvasData.data[s * 4 + 1] = g;
      canvasData.data[s * 4 + 2] = b;
    }
  }

  function resize() {
    w = c.offsetWidth;
    h = c.offsetHeight;

    c.width = w;
    c.height = h;

    canvasData = ctx.createImageData(w, h);

    fillBackgroundColor();

    ny = Math.ceil(h / d) + 2;
    nx = Math.ceil(w / d) + 2;
    n = nx * ny;

    dots = [];

    let gx = -d * 0.5;
    let gy = -d * 0.5;

    for (let i = 0; i < ny; i++) {
      for (let j = 0; j < nx; j++) {
        dots.push(new Fly(gx, gy));
        gx += d;
      }
      gx = -d * 0.5;
      gy += d;
    }
  }

  function mousemove(e) {
    mx = e.clientX;
    my = e.clientY;
  }

  function animate() {
    for (let z = 0; z < n; z++) dots[z].compute();

    for (const u of alphaindexes) canvasData.data[u] = 0;
    alphaindexes = [];

    for (let z = 0; z < n; z++) dots[z].draw(canvasData);

    ctx.putImageData(canvasData, 0, 0);

    requestAnimationFrame(animate);
  }

  resize();
  animate();

  window.addEventListener("mousemove", mousemove);
  window.addEventListener("resize", resize);

  watch(
    () => props.color,
    newVal => {
      currentColor = parseColor(newVal);
      fillBackgroundColor();
      ctx.putImageData(canvasData, 0, 0);
    }
  );

  onBeforeUnmount(() => {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("resize", resize);
  });
});

const inner = ref<HTMLElement | null>(null)
let rafId = 0
const speed = 0.9
let offset = 0

function loop() {
  if (!inner.value) return

  const first = inner.value.children[0] as HTMLElement
  const firstWidth = first.offsetWidth + 64 // space-x-16 = 4rem = 64px

  offset -= speed
  inner.value.style.transform = `translateX(${offset}px)`

  // cuando el primero sale completamente
  if (-offset >= firstWidth) {
    offset += firstWidth
    inner.value.appendChild(first)
  }

  rafId = requestAnimationFrame(loop)
}

onMounted(() => {
  rafId = requestAnimationFrame(loop)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
})

onMounted(() => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});
</script>
