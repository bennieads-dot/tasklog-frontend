<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";

const page = ref({ title: "Starter Page" });
const breadcrumbs = ref([
  {
    text: "Dashboard",
    disabled: false,
    to: "#",
  },
  {
    text: "Starter Page",
    disabled: true,
  },
]);
</script>

<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" md="6">
      <v-card>
        <v-toolbar color="white" dense flat>
          <v-toolbar-title>Hello world !</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          <br />
          <br />
          <br />
          <br />
          <br />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card>
        <v-toolbar color="white" dense flat>
          <v-toolbar-title>Hello world !</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          <br />
          <br />
          <br />
          <br />
          <br />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
