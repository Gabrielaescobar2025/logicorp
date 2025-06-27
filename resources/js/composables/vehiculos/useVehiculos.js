import axios from "axios";
import { onMounted, ref } from "vue";
import { usePage } from "@inertiajs/vue3";

const oVehiculo = ref({
    id: 0,
    marca: "",
    modelo: "",
    anio: "",
    placa: "",
    nro_chasis: "",
    color: "",
    foto: null,
    descripcion: "",
    nro_bin: "",
    nro_cha_tanque: "",
    marca_tanque: "",
    capacidad_tanque: "",
    nro_compartamiento: "",
    volumen_tanque: "",
    ejes_tanque: "",
    nro_precientos: "",
    tipo_tanque: "",
    conductor_id: "",
    _method: "POST",
});

export const useVehiculos = () => {
    const { flash } = usePage().props;
    const getVehiculos = async () => {
        try {
            const response = await axios.get(route("vehiculos.listado"), {
                headers: { Accept: "application/json" },
            });
            return response.data.vehiculos;
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `${
                    flash.error
                        ? flash.error
                        : err.response?.data
                        ? err.response?.data?.message
                        : "Hay errores en el formulario"
                }`,
                confirmButtonColor: "#3085d6",
                confirmButtonText: `Aceptar`,
            });
            throw err; // Puedes manejar el error según tus necesidades
        }
    };

    const getVehiculosByTipo = async (data) => {
        try {
            const response = await axios.get(route("vehiculos.byTipo"), {
                headers: { Accept: "application/json" },
                params: data,
            });
            return response.data.vehiculos;
        } catch (error) {
            console.error("Error:", error);
            throw error; // Puedes manejar el error según tus necesidades
        }
    };

    const getVehiculosApi = async (data) => {
        try {
            const response = await axios.get(
                route("vehiculos.paginado", data),
                {
                    headers: { Accept: "application/json" },
                }
            );
            return response.data.vehiculos;
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `${
                    flash.error
                        ? flash.error
                        : err.response?.data
                        ? err.response?.data?.message
                        : "Hay errores en el formulario"
                }`,
                confirmButtonColor: "#3085d6",
                confirmButtonText: `Aceptar`,
            });
            throw err; // Puedes manejar el error según tus necesidades
        }
    };
    const saveVehiculo = async (data) => {
        try {
            const response = await axios.post(route("vehiculos.store", data), {
                headers: { Accept: "application/json" },
            });
            Swal.fire({
                icon: "success",
                title: "Correcto",
                text: `${flash.bien ? flash.bien : "Proceso realizado"}`,
                confirmButtonColor: "#3085d6",
                confirmButtonText: `Aceptar`,
            });
            return response.data;
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `${
                    flash.error
                        ? flash.error
                        : err.response?.data
                        ? err.response?.data?.message
                        : "Hay errores en el formulario"
                }`,
                confirmButtonColor: "#3085d6",
                confirmButtonText: `Aceptar`,
            });
            throw err; // Puedes manejar el error según tus necesidades
        }
    };

    const deleteVehiculo = async (id) => {
        try {
            const response = await axios.delete(
                route("vehiculos.destroy", id),
                {
                    headers: { Accept: "application/json" },
                }
            );
            Swal.fire({
                icon: "success",
                title: "Correcto",
                text: `${flash.bien ? flash.bien : "Proceso realizado"}`,
                confirmButtonColor: "#3085d6",
                confirmButtonText: `Aceptar`,
            });
            return response.data;
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `${
                    flash.error
                        ? flash.error
                        : err.response?.data
                        ? err.response?.data?.message
                        : "Hay errores en el formulario"
                }`,
                confirmButtonColor: "#3085d6",
                confirmButtonText: `Aceptar`,
            });
            throw err; // Puedes manejar el error según tus necesidades
        }
    };

    const setVehiculo = (item = null) => {
        if (item) {
            oVehiculo.value.id = item.id;
            oVehiculo.value.marca = item.marca;
            oVehiculo.value.modelo = item.modelo;
            oVehiculo.value.anio = item.anio;
            oVehiculo.value.placa = item.placa;
            oVehiculo.value.nro_chasis = item.nro_chasis;
            oVehiculo.value.color = item.color;
            oVehiculo.value.foto = item.foto;
            oVehiculo.value.descripcion = item.descripcion;
            oVehiculo.value.nro_bin = item.nro_bin;
            oVehiculo.value.nro_cha_tanque = item.nro_cha_tanque;
            oVehiculo.value.marca_tanque = item.marca_tanque;
            oVehiculo.value.capacidad_tanque = item.capacidad_tanque;
            oVehiculo.value.nro_compartamiento = item.nro_compartamiento;
            oVehiculo.value.volumen_tanque = item.volumen_tanque;
            oVehiculo.value.ejes_tanque = item.ejes_tanque;
            oVehiculo.value.nro_precientos = item.nro_precientos;
            oVehiculo.value.tipo_tanque = item.tipo_tanque;
            oVehiculo.value.conductor_id = item.conductor_id;
            oVehiculo.value._method = "PUT";
            return oVehiculo;
        }
        return false;
    };

    const limpiarVehiculo = () => {
        oVehiculo.value.id = 0;
        oVehiculo.value.marca = "";
        oVehiculo.value.modelo = "";
        oVehiculo.value.anio = "";
        oVehiculo.value.placa = "";
        oVehiculo.value.nro_chasis = "";
        oVehiculo.value.color = "";
        oVehiculo.value.foto = null;
        oVehiculo.value.descripcion = "";
        oVehiculo.value.nro_bin = "";
        oVehiculo.value.nro_cha_tanque = "";
        oVehiculo.value.marca_tanque = "";
        oVehiculo.value.capacidad_tanque = "";
        oVehiculo.value.nro_compartamiento = "";
        oVehiculo.value.volumen_tanque = "";
        oVehiculo.value.ejes_tanque = "";
        oVehiculo.value.nro_precientos = "";
        oVehiculo.value.tipo_tanque = "";
        oVehiculo.value.conductor_id = "";
        oVehiculo.value._method = "POST";
    };

    onMounted(() => {});

    return {
        oVehiculo,
        getVehiculos,
        getVehiculosApi,
        saveVehiculo,
        deleteVehiculo,
        setVehiculo,
        limpiarVehiculo,
        getVehiculosByTipo,
    };
};
