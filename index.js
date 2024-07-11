import server from "./src/Server.js";

const main = async() => {
    try {
        await server.listen(server.get("port"));
        console.log(`Ejecutandose en el puerto: ${server.get("port")}`);
    } catch (error) {
        const er = "Error al conectarse al puerto";
        console.log(er, error);
    }   
}
main();