<script lang="ts" setup>
import { computed, reactive, ref, watch } from "vue";
import QRCodeStyling from "./core/QRCodeStyling";

export interface Props {
  modelValue: string;
  width: number;
  height: number;
  margin: number;
  imgclass: string;
  myclass: string;
  downloadButton: string;
  ButtonName: string;
  qrOptions: any;
  imageOptions: any;
  dotsOptions: any;
  backgroundOptions: any;
  cornersSquareOptions: any;
  cornersDotOptions: any;
  fileExt: string;
  image: string;
  download: boolean;
  downloadOptions: any;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  width: 300,
  height: 300,
  margin: 0,
  imgclass: "",
  myclass: "",
  downloadButton: "",
  ButtonName: "Download",
  value: "",
  qrOptions: {
    typeNumber: 0,
    mode: "Byte",
    errorCorrectionLevel: "Q"
  },
  imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 },
  dotsOptions: {
    type: "dots",
    color: "#6a1a4c",
    gradient: {
      type: "linear",
      rotation: 0,
      colorStops: [
        { offset: 0, color: "#6a1a4c" },
        { offset: 1, color: "#6a1a4c" }
      ]
    }
  },
  backgroundOptions: { color: "#ffffff" },
  cornersSquareOptions: { type: "dot", color: "#000000" },
  cornersDotOptions: { type: undefined, color: "#000000" },
  fileExt: "png",
  image: "",
  download: false,
  downloadOptions: { name: "vqr", extension: "png" }
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    console.log("props.modelValue:", props.modelValue);
    return props.modelValue;
  },

  set(value) {
    console.log("props.modelValue.set:", value);
    return emit("update:modelValue", value);
  }
});
const state = reactive({
  img: ""
});
const qrCode = ref(
  new QRCodeStyling({
    data: model.value,
    width: props.width,
    height: props.height,
    margin: props.margin,
    qrOptions: props.qrOptions,
    imageOptions: props.imageOptions,
    dotsOptions: props.dotsOptions,
    backgroundOptions: props.backgroundOptions,
    image: props.image,
    cornersSquareOptions: props.cornersSquareOptions,
    cornersDotOptions: props.cornersDotOptions
  })
);
console.log("model.value:", model.value, qrCode.value);

const componentKey = ref(0);

const forceRender = () => {
  componentKey.value += 1;
};

const img2 = await qrCode.value.getImageUrl(props.fileExt);
console.log("img2", img2);
forceRender();
/*.then((r) => {
  state.img = r;
  console.log("state.img.1", r, componentKey.value);
  forceRender();
});*/

// function onDownloadClick() {
//   qrCode.value.download(this.downloadOptions);
// }
watch(
  () => qrCode,
  () => {
    console.log("qrCode", qrCode);
    qrCode.value.getImageUrl(props.fileExt).then((r) => {
      state.img = r;
      console.log("state.img.2", r, componentKey.value);
      forceRender();
    });
  }
);
watch(
  () => state.img,
  () => {
    console.log("state.img", state.img);
  }
);

console.log("props.modelValue", props.modelValue);
</script>

<template>
  <div><span>QR</span></div>
</template>
