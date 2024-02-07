// Asynchronous function getting the grid parameters data
export default async function fetchComponent(filename) {

    try {
        const extension = filename.slice(-4),
              response = await fetch(filename),
            //   response = await fetch('./assets/backgrounds/grid_parameters.json'),
              jsonData = await response.json(),
              html = await response.text();

        if (extension == "json") {
            return jsonData;
        }
        if (extension == "html") {
            return html;
        }
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
}
