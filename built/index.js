import Vue from "vue";
import HelloComponent from "./components/Hello";
let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
    data: { name: "sss" },
    components: {
        HelloComponent
    }
});
//# sourceMappingURL=index.js.map