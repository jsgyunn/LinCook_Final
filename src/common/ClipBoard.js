export const handleCopyClipBoard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.log(err);
    }
}