module.exports = async (model, data) => {
    for(const instance of data) {
        await model.create(instance);
    }
};