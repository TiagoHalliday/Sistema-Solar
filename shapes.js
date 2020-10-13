class figDraw{
    line2d(x1, y1, x2, y2){
        var f = new Line(x1, y1, x2, y2)
        f.setColor(0, 128, 0);
        f.setWeight(2);
        //f.draw(); // descomente para usar o reflect e descomente o draw do reflect tmb, e comente para usar os outros metodos
        //f.reflectX2D()
        //f.draw()
        //f.reflectY2D()
        //f.draw()
        //f.projectionX2D()
        //f.projectionY2D()
        //f.rotate2D(150)
        //f.cisalhamentoX2D(100)
        //f.cisalhamentoY2D(100)
        //f.translate2D(150, -50)
        f.draw();
    
    }

    rect2d(x, y, w, h){
        var f = new Rect(x, y, w, h)
        f.setColor(0, 128, 0);
        f.setWeight(2);
        //f.draw(); // descomente para usar o reflect e descomente o draw do reflect tmb, e comente para usar os outros metodos
        //f.reflectX2D()
        //f.draw()
        //f.reflectY2D()
        //f.draw()
        //f.projectionX2D()
        //f.projectionY2D()
        //f.rotate2D(150)
        //f.cisalhamentoX2D(100)
        //f.cisalhamentoY2D(100)
        //f.translate2D(150, -50)
        f.draw();

    }

    triangulo(x1, y1, x2, y2, x3, y3){
        var f = new triangulo(x1, y1, x2, y2, x3, y3)
        f.setColor(0, 128, 0);
        f.setWeight(2);
        //f.draw(); // descomente para usar o reflect e descomente o draw do reflect tmb, e comente para usar os outros metodos
        //f.reflectX2D()
        //f.draw()
        //f.reflectY2D()
        //f.draw()
        //f.projectionX2D()
        //f.projectionY2D()
        //f.rotate2D(150)
        //f.cisalhamentoX2D(100)
        //f.cisalhamentoY2D(100)
        //f.translate2D(150, -50)
        f.draw();
    }

    circle(x, y, r, k){
        var f = new circle(x, y, r, k)
        f.setColor(0, 128, 0);
        f.setWeight(2);
        //f.draw(); // descomente para usar o reflect e descomente o draw do reflect tmb, e comente para usar os outros metodos
        //f.reflectX2D()
        //f.draw()
        //f.reflectY2D()
        //f.draw()
        //f.projectionX2D()
        //f.projectionY2D()
        //f.rotate2D(150)
        //f.cisalhamentoX2D(100)
        //f.cisalhamentoY2D(100)
        //f.translate2D(150, -50)
        f.draw();

    } 

    line3d(x1, y1, z1, x2, y2, z2){
        var l = new Line3D(x1, y1, z1, x2, y2, z2)
        l.setColor(0, 128, 0);
        l.setWeight(2)
        //l.reflectX3D()
        //l.reflectY3D()
        //l.reflectZ3D()
        //l.projectionXZ3D()
        //l.projectionYX3D()
        //l.projectionZY3D()
        //l.rotateX3D(120)
        //l.rotateY3D(120)
        //l.rotateZ3D(120)
        //l.cisalhamentoX3D(300)
        //l.cisalhamentoY3D(300)
        //l.cisalhamentoZ3D(300)
        //l.translate3D(50, 50, 500)
        l.draw()
    }

    rect3d(x, y, z, w, h, l){
        var l = new Rect3D(x, y, z, w, h, l)
        l.setColor(0, 128, 0);
        l.setWeight(2)
        //l.reflectX3D()
        //l.reflectY3D()
        //l.reflectZ3D()
        //l.projectionXZ3D()
        //l.projectionYX3D()
        //l.projectionZY3D()
        //l.rotateX3D(120)
        //l.rotateY3D(120)
        //l.rotateZ3D(120)
        //l.cisalhamentoX3D(300)
        //l.cisalhamentoY3D(300)
        //l.cisalhamentoZ3D(300)
        //l.translate3D(50, 50, 500)
        l.draw()
    }

    piramide(x, y, z, w, h, l){
        var l = new piramide(x, y, z, w, h, l)
        l.setColor(0, 128, 0);
        l.setWeight(2)
        //l.reflectX3D()
        //l.reflectY3D()
        //l.reflectZ3D()
        //l.projectionXZ3D()
        //l.projectionYX3D()
        //l.projectionZY3D()
        //l.rotateX3D(120)
        //l.rotateY3D(120)
        //l.rotateZ3D(120)
        //l.cisalhamentoX3D(300)
        //l.cisalhamentoY3D(300)
        //l.cisalhamentoZ3D(300)
        //l.translate3D(50, 50, 500)
        l.draw()
    }

    esfera(x, y, z, r, t, p){
        var l = new esfera(x, y, z, r, t, p)
        l.setColor(0, 128, 0);
        l.setWeight(2)
        //l.reflectX3D()
        //l.reflectY3D()
        //l.reflectZ3D()
        //l.projectionXZ3D()
        //l.projectionYX3D()
        //l.projectionZY3D()
        //l.rotateX3D(120)
        //l.rotateY3D(120)
        //l.rotateZ3D(120)
        //l.cisalhamentoX3D(300)
        //l.cisalhamentoY3D(300)
        //l.cisalhamentoZ3D(300)
        //l.translate3D(50, 50, 500)
        l.draw()
    }
}


//Lines


class Line {
    constructor(x1, y1, x2, y2){

        this.points = [
                new Vector(2, [x1, y1]), 
                new Vector(2, [x2, y2])
            ]

        this.r = 0;
        this.g = 0;
        this.b = 0;

        }
    
        setColor(r,g,b){
            this.r = r;
            this.g = g;
            this.b = b;
          }

          setWeight(w){
            this.w = w;
          }

    draw(){
        stroke(this.r, this.g, this.b)
        strokeWeight(this.w)

        beginShape(LINES)

        vertex(this.points[0].elements[0], this.points[0].elements[1]);
        vertex(this.points[1].elements[0], this.points[1].elements[1]);

        endShape()
    }

    reflectX2D(){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.reflectX2D(this.points[i])
        }
    }

    reflectY2D(){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.reflectY2D(this.points[i])
        }
    }

    projectionX2D(){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.projectionX2D(this.points[i])
        }
    }

    projectionY2D(){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.projectionY2D(this.points[i])
        }
    }

    rotate2D(ang){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.rotate2D(this.points[i],  ang)
        }
    }

    cisalhamentoXD(ang){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.cisalhamentoX2D(this.points[i],  ang)
        } 
    }

    cisalhamentoY2D(ang){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.cisalhamentoY2D(this.points[i],  ang)
        } 
    }

    translate2D(x,y){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.translate2D(this.points[i], x, y)
        }
    }
}

class Line3D{
    constructor(x1, y1, z1, x2, y2, z2){

        this.points = [
                new Vector(3, [x1, y1, z1]), 
                new Vector(3, [x2, y2, z2])
            ]

        this.r = 0;
        this.g = 0;
        this.b = 0;

        }

    setColor(r,g,b){
        this.r = r;
          this.g = g;
        this.b = b;
    }

    setWeight(w){
    this.w = w;
    }

    draw(){
        stroke(this.r, this.g, this.b)
        strokeWeight(this.w)

        beginShape(LINES)

        vertex(this.points[0].elements[0], this.points[0].elements[1], this.points[0].elements[2]);
        vertex(this.points[1].elements[0], this.points[1].elements[1], this.points[1].elements[2]);

        endShape()
    }

    reflectX3D(){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.reflectX3D(this.points[i])
        }
    }

    reflectY3D(){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.reflectY3D(this.points[i])
        }
    }

    reflectZ3D(){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.reflectZ3D(this.points[i])
        }
    }

    projectionXZ3D(){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.projectionXZ3D(this.points[i])
        }
    }

    projectionYX3D(){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.projectionYX3D(this.points[i])
        }
    }

    projectionZY3D(){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.projectionZY3D(this.points[i])
        }
    }

    rotateX3D(ang){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.rotateX3D(this.points[i], ang)
        }
    }

    rotateY3D(ang){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.rotateY3D(this.points[i], ang)
        }
    }

    rotateZ3D(ang){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.rotateZ3D(this.points[i], ang)
        }
    }

    cisalhamentoX3D(ang){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.cisalhamentoX3D(this.points[i], ang)
        }
    }

    cisalhamentoY3D(ang){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.cisalhamentoY3D(this.points[i], ang)
        }
    }

    cisalhamentoZ3D(ang){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.cisalhamentoZ3D(this.points[i], ang)
        }
    }

    translate3D(x, y, z){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.translate3D(this.points[i], x, y, z)
        } 
    }
}

//rect e rect3d

class Rect{
    constructor(x, y, width, height){

        this.x = x
        this.y = y
        this.w = width
        this.h = height

        //arry de pontos
        this.points = [
            new Vector(2, [x, y]),
            new Vector(2, [x + width, y]),
            new Vector(2, [x + width, y + height]),
            new Vector(2, [x, y + height])
        ]

        //Cor da borda rgb
        this.sR = 0;
        this.sG = 0;
        this.sB = 0;
        
        //Preenchimento da borda rgb
        this.fR = 0;
        this.fG = 0;
        this.fB = 0;

        //Grossura da borda
        this.w = 1;
    }

    setColor(r, g, b){
        this.sR = r;
        this.sG = g;
        this.sB = b;
    }

    setFill(r, g, b){
        this.fR = r;
        this.fG = g;
        this.fB = b;
    }

    setWeight(w){
        this.w = w;
    }

    draw(){

        stroke(this.sR, this.sG, this.sB);
        fill(this.fR, this.fB, this.fB);
        strokeWeight(this.w);

        beginShape(TRIANGLES)
        
            //first
            vertex(this.points[0].elements[0], this.points[0].elements[1])
            vertex(this.points[1].elements[0], this.points[1].elements[1])
            vertex(this.points[2].elements[0], this.points[2].elements[1])

            //second    
            vertex(this.points[0].elements[0], this.points[0].elements[1])
            vertex(this.points[2].elements[0], this.points[2].elements[1])
            vertex(this.points[3].elements[0], this.points[3].elements[1])    
        endShape();
    }

    reflectX2D(){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.reflectX2D(this.points[i])
        }
    }

    reflectY2D(){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.reflectY2D(this.points[i])
        }
    }

    projectionX2D(){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.projectionX2D(this.points[i])
        }
    }

    projectionY2D(){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.projectionY2D(this.points[i])
        }
    }

    rotate2D(ang){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.rotate2D(this.points[i],  ang)
        }
    }

    cisalhamentoXD(ang){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.cisalhamentoX2D(this.points[i],  ang)
        } 
    }

    cisalhamentoY2D(ang){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.cisalhamentoY2D(this.points[i],  ang)
        } 
    }

    translate2D(x,y){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.translate2D(this.points[i], x, y)
        }
    }
}


class Rect3D{
    constructor(x, y,z, w, h,l){
    
        //arry de pontos
        this.points = [
            new Vector(3, [x, y, z]),
            new Vector(3, [x + w, y, z]),
            new Vector(3, [x + w, y + h, z]),
            new Vector(3, [x, y + h, z])
            ,
            new Vector(3, [x, y, z + l]),
            new Vector(3, [x + w, y, z + l]),
            new Vector(3, [x + w, y + h, z + l]),
            new Vector(3, [x, y + h, z + l])
        ]
    //Cor da borda rgb  
    this.sR = 0;
    this.sG = 0;
    this.sB = 0;
    
    //Preenchimento da borda rgb
    this.fR = 0;
    this.fG = 0;
    this.fB = 0;
    
    //Grossura da borda
    this.w = 1;
    }
    
    
    setColor(r, g, b){
        this.sR = r;
        this.sG = g;
        this.sB = b;
    }
    
    setFill(r, g, b){
        this.fR = r;
        this.fG = g;
        this.fB = b;
    }
    
    setWeight(w){
        this.w = w;
    }
    
    draw(){
    
        stroke(this.sR, this.sG, this.sB);
        fill(this.fR, this.fB, this.fB);
        strokeWeight(this.w);
    
        beginShape(TRIANGLES)
        
        vertex(this.points[0].elements[0], this.points[0].elements[1], this.points[0].elements[2])
        vertex(this.points[1].elements[0], this.points[1].elements[1], this.points[1].elements[2])
        vertex(this.points[2].elements[0], this.points[2].elements[1], this.points[2].elements[2])
    
        vertex(this.points[0].elements[0], this.points[0].elements[1], this.points[0].elements[2])
        vertex(this.points[3].elements[0], this.points[3].elements[1], this.points[3].elements[2])
        vertex(this.points[2].elements[0], this.points[2].elements[1], this.points[2].elements[2])
    
    
        vertex(this.points[0].elements[0], this.points[0].elements[1], this.points[0].elements[2])
        vertex(this.points[4].elements[0], this.points[4].elements[1], this.points[4].elements[2])
        vertex(this.points[7].elements[0], this.points[7].elements[1], this.points[7].elements[2])
    
        vertex(this.points[0].elements[0], this.points[0].elements[1], this.points[0].elements[2])
        vertex(this.points[3].elements[0], this.points[3].elements[1], this.points[3].elements[2])
        vertex(this.points[7].elements[0], this.points[7].elements[1], this.points[7].elements[2])
    
       
        vertex(this.points[0].elements[0], this.points[0].elements[1], this.points[0].elements[2])
        vertex(this.points[4].elements[0], this.points[4].elements[1], this.points[4].elements[2])
        vertex(this.points[5].elements[0], this.points[5].elements[1], this.points[5].elements[2])
    
        vertex(this.points[0].elements[0], this.points[0].elements[1], this.points[0].elements[2])
        vertex(this.points[1].elements[0], this.points[1].elements[1], this.points[1].elements[2])
        vertex(this.points[5].elements[0], this.points[5].elements[1], this.points[5].elements[2])
    
       
        vertex(this.points[6].elements[0], this.points[6].elements[1], this.points[6].elements[2])
        vertex(this.points[5].elements[0], this.points[5].elements[1], this.points[5].elements[2])
        vertex(this.points[4].elements[0], this.points[4].elements[1], this.points[4].elements[2])
    
        vertex(this.points[6].elements[0], this.points[6].elements[1], this.points[6].elements[2])
        vertex(this.points[7].elements[0], this.points[7].elements[1], this.points[7].elements[2])
        vertex(this.points[4].elements[0], this.points[4].elements[1], this.points[4].elements[2])
    
        
        vertex(this.points[6].elements[0], this.points[6].elements[1], this.points[6].elements[2])
        vertex(this.points[5].elements[0], this.points[5].elements[1], this.points[5].elements[2])
        vertex(this.points[1].elements[0], this.points[1].elements[1], this.points[1].elements[2])
    
        vertex(this.points[6].elements[0], this.points[6].elements[1], this.points[6].elements[2])
        vertex(this.points[2].elements[0], this.points[2].elements[1], this.points[2].elements[2])
        vertex(this.points[1].elements[0], this.points[1].elements[1], this.points[1].elements[2])
    
        
        vertex(this.points[6].elements[0], this.points[6].elements[1], this.points[6].elements[2])
        vertex(this.points[2].elements[0], this.points[2].elements[1], this.points[2].elements[2])
        vertex(this.points[3].elements[0], this.points[3].elements[1], this.points[3].elements[2])
    
        vertex(this.points[6].elements[0], this.points[6].elements[1], this.points[6].elements[2])
        vertex(this.points[7].elements[0], this.points[7].elements[1], this.points[7].elements[2])
        vertex(this.points[3].elements[0], this.points[3].elements[1], this.points[3].elements[2])
    
    
        endShape();
    }
        reflectX3D(){
            var t = new Transform
            for(var i = 0; i < this.points.length; i++){
                this.points[i] = t.reflectX3D(this.points[i])
            }
        }
    
        reflectY3D(){
            var t = new Transform
            for(var i = 0; i < this.points.length; i++){
                this.points[i] = t.reflectY3D(this.points[i])
            }
        }
    
        reflectZ3D(){
            var t = new Transform
            for(var i = 0; i < this.points.length; i++){
                this.points[i] = t.reflectZ3D(this.points[i])
            }
        }
    
        projectionXZ3D(){
            var t = new Transform
            for(var i = 0; i < this.points.length; i++){
                this.points[i] = t.projectionXZ3D(this.points[i])
            }
        }
    
        projectionYX3D(){
            var t = new Transform
            for(var i = 0; i < this.points.length; i++){
                this.points[i] = t.projectionYX3D(this.points[i])
            }
        }
    
        projectionZY3D(){
            var t = new Transform
            for(var i = 0; i < this.points.length; i++){
                this.points[i] = t.projectionZY3D(this.points[i])
            }
        }
    
        rotateX3D(ang){
            var t = new Transform
            for(var i = 0; i < this.points.length; i++){
                this.points[i] = t.rotateX3D(this.points[i], ang)
            }
        }
    
        rotateY3D(ang){
            var t = new Transform
            for(var i = 0; i < this.points.length; i++){
                this.points[i] = t.rotateY3D(this.points[i], ang)
            }
        }
    
        rotateZ3D(ang){
            var t = new Transform
            for(var i = 0; i < this.points.length; i++){
                this.points[i] = t.rotateZ3D(this.points[i], ang)
            }
        }
    
        cisalhamentoX3D(ang){
            var t = new Transform
            for(var i = 0; i < this.points.length; i++){
                this.points[i] = t.cisalhamentoX3D(this.points[i], ang)
            }
        }
    
        cisalhamentoY3D(ang){
            var t = new Transform
            for(var i = 0; i < this.points.length; i++){
                this.points[i] = t.cisalhamentoY3D(this.points[i], ang)
            }
        }
    
        cisalhamentoZ3D(ang){
            var t = new Transform
            for(var i = 0; i < this.points.length; i++){
                this.points[i] = t.cisalhamentoZ3D(this.points[i], ang)
            }
        }
    
        translate3D(x, y, z){
            var t = new Transform
            for(var i = 0; i < this.points.length; i++){
                this.points[i] = t.translate3D(this.points[i], x, y, z)
            } 
        }
    }
    

    // triangulo e piramide 


class triangulo{
    constructor(x1, y1, x2, y2, x3, y3){
        this.points = [
            new Vector(2, [x1, y1]), 
            new Vector(2, [x2, y2]),
            new Vector(2, [x3, y3])
        ]

        this.r = 0;
        this.g = 0;
        this.b = 0;
    }

    setColor(r,g,b){
        this.r = r;
        this.g = g;
        this.b = b;
      }

      setWeight(w){
        this.w = w;
      }

    draw(){
        stroke(this.r, this.g, this.b)
        strokeWeight(this.w)

        beginShape(TRIANGLES)
        
            vertex(this.points[0].elements[0], this.points[0].elements[1])
            vertex(this.points[1].elements[0], this.points[1].elements[1])
            vertex(this.points[2].elements[0], this.points[2].elements[1])
    
        endShape();
    }

    reflectX2D(){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.reflectX2D(this.points[i])
        }
    }

    reflectY2D(){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.reflectY2D(this.points[i])
        }
    }

    projectionX2D(){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.projectionX2D(this.points[i])
        }
    }

    projectionY2D(){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.projectionY2D(this.points[i])
        }
    }

    rotate2D(ang){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.rotate2D(this.points[i],  ang)
        }
    }

    cisalhamentoXD(ang){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.cisalhamentoX2D(this.points[i],  ang)
        } 
    }

    cisalhamentoY2D(ang){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.cisalhamentoY2D(this.points[i],  ang)
        } 
    }

    translate2D(x,y){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.translate2D(this.points[i], x, y)
        }
    }
}


class piramide{
    constructor(x,y,z,h,w,l){
        this.points = [
            new Vector(3, [x, y,z]),
            new Vector(3, [x-l/2, y-h,z+w/2]),
            new Vector(3, [x-l/2, y-h,z-w/2]),
            new Vector(3, [x+l/2, y-h,z+w/2]),
            new Vector(3, [x+l/2, y-h,z-w/2])]

        this.r = 0;
        this.g = 0;
        this.b = 0;
        
     //Cor da borda rgb  
     this.sR = 0;
     this.sG = 0;
     this.sB = 0;
     
     //Preenchimento da borda rgb
     this.fR = 0;
     this.fG = 0;
     this.fB = 0;

     //Grossura da borda
     this.w = 1;
        
    }

     
    setColor(r, g, b){
        this.sR = r;
        this.sG = g;
        this.sB = b;
    }

    setFill(r, g, b){
        this.fR = r;
        this.fG = g;
        this.fB = b;
    }

    setWeight(w){
        this.w = w;
    }



          draw(){

            stroke(this.sR, this.sG, this.sB);
            fill(this.fR, this.fB, this.fB);
            strokeWeight(this.w);

            beginShape(TRIANGLES);
    
            vertex(this.points[0].elements[0], this.points[0].elements[1],this.points[0].elements[2])
            vertex(this.points[1].elements[0], this.points[1].elements[1],this.points[1].elements[2])
            vertex(this.points[2].elements[0], this.points[2].elements[1],this.points[2].elements[2])

            
            vertex(this.points[0].elements[0], this.points[0].elements[1],this.points[0].elements[2])
            vertex(this.points[3].elements[0], this.points[3].elements[1],this.points[3].elements[2])
            vertex(this.points[1].elements[0], this.points[1].elements[1],this.points[1].elements[2])

                
            vertex(this.points[0].elements[0], this.points[0].elements[1],this.points[0].elements[2])
            vertex(this.points[3].elements[0], this.points[3].elements[1],this.points[3].elements[2])
            vertex(this.points[4].elements[0], this.points[4].elements[1],this.points[4].elements[2])

                
            vertex(this.points[0].elements[0], this.points[0].elements[1],this.points[0].elements[2])
            vertex(this.points[2].elements[0], this.points[2].elements[1],this.points[2].elements[2])
            vertex(this.points[4].elements[0], this.points[4].elements[1],this.points[4].elements[2])
            

            vertex(this.points[3].elements[0], this.points[3].elements[1],this.points[3].elements[2])
            vertex(this.points[1].elements[0], this.points[1].elements[1],this.points[1].elements[2])
            vertex(this.points[2].elements[0], this.points[2].elements[1],this.points[2].elements[2])

            
            vertex(this.points[3].elements[0], this.points[3].elements[1],this.points[3].elements[2])
            vertex(this.points[1].elements[0], this.points[1].elements[1],this.points[1].elements[2])
            vertex(this.points[4].elements[0], this.points[4].elements[1],this.points[4].elements[2])

            vertex(this.points[1].elements[0], this.points[1].elements[1],this.points[1].elements[2])
            vertex(this.points[2].elements[0], this.points[2].elements[1],this.points[2].elements[2])
            vertex(this.points[4].elements[0], this.points[4].elements[1],this.points[4].elements[2])
            

            
            
            endShape();
        }


    reflectX3D(){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.reflectX3D(this.points[i])
        }
    }

    reflectY3D(){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.reflectY3D(this.points[i])
        }
    }

    reflectZ3D(){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.reflectZ3D(this.points[i])
        }
    }

    projectionXZ3D(){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.projectionXZ3D(this.points[i])
        }
    }

    projectionYX3D(){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.projectionYX3D(this.points[i])
        }
    }

    projectionZY3D(){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.projectionZY3D(this.points[i])
        }
    }
    
    rotateX3D(ang){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.rotateX3D(this.points[i], ang)
        }
    }

    rotateY3D(ang){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.rotateY3D(this.points[i], ang)
        }
    }

    rotateZ3D(ang){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.rotateZ3D(this.points[i], ang)
        }
    }

    cisalhamentoX3D(ang){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.cisalhamentoX3D(this.points[i], ang)
        }
    }

    cisalhamentoY3D(ang){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.cisalhamentoY3D(this.points[i], ang)
        }
    }

    cisalhamentoZ3D(ang){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.cisalhamentoZ3D(this.points[i], ang)
        }
    }
  
    translate3D(x, y, z){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.translate3D(this.points[i], x, y, z)
        } 
    }
}


//Circle e esfra


class circle{
constructor(x, y, r, k){

    this.points =  [
     new Vector(2, [x, y]),  new Vector(2, [r, k])] 

    //Cor da borda rgb  
    this.sR = 0;
    this.sG = 0;
    this.sB = 0;
    
    //Preenchimento da borda rgb
    this.fR = 0;
    this.fG = 0;
    this.fB = 0;

    //Grossura da borda
    this.w = 1;

}
setColor(r, g, b){
    this.sR = r;
    this.sG = g;
    this.sB = b;
}


setFill(r, g, b){
    this.fR = r;
    this.fG = g;
    this.fB = b;
}

setWeight(w){
    this.w = w;
}

draw(){
   var j = 360 / this.points[1].get(2)
   beginShape(TRIANGLES)
    
   for(var i = 0; i < 360; i += j){
        vertex(this.points[0].get(1) + Math.cos(i * Math.PI/180) * this.points[1].get(1), this.points[0].get(2) + Math.sin(i * Math.PI/180) * this.points[1].get(1))
        vertex(this.points[0].get(1),this.points[0].get(2) )
       
        vertex(this.points[0].get(1) + Math.cos((i+j) * Math.PI/180) * this.points[1].get(1), this.points[0].get(2) + Math.sin((i+j) * Math.PI/180) * this.points[1].get(1))
   }
   endShape();

}

    reflectX2D(){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.reflectX2D(this.points[i])
        }
    }

    reflectY2D(){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.reflectY2D(this.points[i])
        }
    }

    projectionX2D(){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.projectionX2D(this.points[i])
        }
    }

    projectionY2D(){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.projectionY2D(this.points[i])
        }
    }

    rotate2D(ang){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.rotate2D(this.points[i],  ang)
        }
    }

    cisalhamentoXD(ang){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.cisalhamentoX2D(this.points[i],  ang)
        } 
    }

    cisalhamentoY2D(ang){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.cisalhamentoY2D(this.points[i],  ang)
        } 
    }

    translate2D(x,y){
        var t = new Transform()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.translate2D(this.points[i], x, y)
        }
    }
}

class esfera{
    constructor(x, y, z, r, t, p){
        this.x = x
        this.y = y
        this.z = z
        this.radius = r  //r largura   
        this.stacks = t  //t quantidade de pilhas
        this.sectors = p //p quantidade de setores

        this.points = []
        var x1, y1, z1, xy
        var sectorStep = 2 * Math.PI / this.sectors
        var stackStep = Math.PI / this.stacks
        var stackAngle, sectorAngle

        for(var i = 0; i <= this.stacks; i++){
            stackAngle = Math.PI / 2 - i * stackStep
            xy = this.radius * Math.cos(stackAngle)
            y1 = this.y + this.radius * Math.sin(stackAngle)

            for(var j = 0; j < this.sectors + 1; j++){
                sectorAngle = j * sectorStep
                z1 = this.z + (xy * Math.cos(sectorAngle))
                x1 = this.x + (xy * Math.sin(sectorAngle))
                this.points.push(new Vector(3, [x1, y1, z1]))
            }
        }

        this.r = 0;
        this.g = 0;
        this.b = 0;
    }

    setColor(r,g,b){
        this.r = r;
        this.g = g;
        this.b = b;
      }

      setWeight(w){
        this.w = w;
      }

      draw(){
        stroke(this.r, this.g, this.b)
        strokeWeight(this.w)

        beginShape(TRIANGLES)
        var k1, k2
        for(var i = 0; i < this.stacks; i++){
            k1 = i * (this.sectors + 1)
            k2 = k1 + this.sectors + 1

            for(var j = 0; j < this.sectors; j++, k1++, k2++){
                if(i != 0){
                    vertex(this.points[k1].elements[0], this.points[k1].elements[1], this.points[k1].elements[2])
                    vertex(this.points[k2].elements[0], this.points[k2].elements[1], this.points[k2].elements[2])
                    vertex(this.points[k1 + 1].elements[0], this.points[k1 + 1].elements[1], this.points[k1 + 1].elements[2])
                }
    
                if(i != this.stacks - 1){
                    vertex(this.points[k1 + 1].elements[0], this.points[k1 + 1].elements[1], this.points[k1 + 1].elements[2])
                    vertex(this.points[k2].elements[0], this.points[k2].elements[1], this.points[k2].elements[2])
                    vertex(this.points[k2 + 1].elements[0], this.points[k2 + 1].elements[1], this.points[k2 + 1].elements[2])
                }
            }
        }
        endShape()
    }
    
    reflectX3D(){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.reflectX3D(this.points[i])
        }
    }

    reflectY3D(){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.reflectY3D(this.points[i])
        }
    }

    reflectZ3D(){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.reflectZ3D(this.points[i])
        }
    }

    projectionXZ3D(){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.projectionXZ3D(this.points[i])
        }
    }

    projectionYX3D(){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.projectionYX3D(this.points[i])
        }
    }

    projectionZY3D(){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.projectionZY3D(this.points[i])
        }
    }
    
    rotateX3D(ang){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.rotateX3D(this.points[i], ang)
        }
    }

    rotateY3D(ang){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.rotateY3D(this.points[i], ang)
        }
    }

    rotateZ3D(ang){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.rotateZ3D(this.points[i], ang)
        }
    }

    cisalhamentoX3D(ang){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.cisalhamentoX3D(this.points[i], ang)
        }
    }

    cisalhamentoY3D(ang){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.cisalhamentoY3D(this.points[i], ang)
        }
    }

    cisalhamentoZ3D(ang){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.cisalhamentoZ3D(this.points[i], ang)
        }
    }
  
    translate3D(x, y, z){
        var t = new Transform
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.translate3D(this.points[i], x, y, z)
        } 
    }
}

