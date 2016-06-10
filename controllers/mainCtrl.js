var hobbies = [{
    "id": "0",
    "name": "Watching cartoons",
    "type": "current"
}, {
    "id": "1",
    "name": "Quacking",
    "type": "past"
}];



module.exports = {
    index: function(req, res, next) {
        res.status(200).json(hobbies);
    },
    getName: function(req, res, next) {
        res.status(200).json(hobbies[parseInt(req.params.type)]);
    },
    update: function(req, res, next) {
        hobbies[req.params.id] = req.body;
        res.status(200).json(hobbies);
    },
    create: function(req, res, next) {
        hobbies.push(req.body);
        res.status(200).json(hobbies);
    },
    destroy: function(req, res, next) {
        hobbies.splice(req.params.id, 1);
        res.sendStatus(204);
    }




};
