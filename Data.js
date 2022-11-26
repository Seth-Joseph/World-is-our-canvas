class Data{
    constructor(){
        this.drawing = null;
    }
    saveDrawing(){
        var ref = database.ref('Drawing');
        var data={
            name: "Seth",
            drawing :this.drawing
        }
        ref.push(data);
    }
}