// Asynchronous function getting local components (WIP)

export default async function fetchComponent(filename) {

    try {
        const extension = filename.slice(-4),
              response = await fetch(filename),
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
