const generateSimpleSKU = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `SKU${timestamp}${random}`;
};

export { generateSimpleSKU };