export const ConvertImageToBase64 = (file) => {
    console.log(file);
    return new Promise((reject, resolve) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        }
        fileReader.onerror = (error) => {
            console.log(fileReader.error)
            reject(fileReader.error);
        }
    })
}