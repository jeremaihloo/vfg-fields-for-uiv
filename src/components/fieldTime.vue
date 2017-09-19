<template>
  <dropdown>
    <div class="input-group">
      <input class="form-control" type="text" v-model="value">
      <div class="input-group-btn">
        <button class="btn btn-default" type="button" data-role="trigger">
          <i class="glyphicon glyphicon-calendar"></i>
        </button>
      </div>
    </div>
    <template slot="dropdown">
      <li>
        <date-picker v-model="value" :week-starts-with="0"></date-picker>
      </li>
    </template>
  </dropdown>
</template>

<script>
import { abstractField } from 'vue-form-generator'

export default {
  mixins: [abstractField]
}
</script>