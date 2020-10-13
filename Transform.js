class Transform{
    reflectX2D(points){
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(3, 1, [points.get(1,1), points.get(2,1), 1])

        var Rot = new Matrix(3, 3, [
            1, 0, 0,
            0, -1, 0,
            0, 0, 1
        ])

        newPoint = LA.dot(Rot, forma)
        return newPoint
    }

    reflectY2D(points){
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(3, 1, [points.get(1,1), points.get(2,1), 1])

        var Rot = new Matrix(3, 3, [
            -1, 0, 0, 
            0, 1, 0,
            0, 0, 1
        ])

        newPoint = LA.dot(Rot, forma)
        return newPoint
    }

    projectionX2D(points){
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(3, 1, [points.get(1,1), points.get(2,1), 1])

        var Rot = new Matrix(3, 3, [
            1, 0, 0,
            0, 0, 0,
            0, 0, 1 
        ])

        newPoint = LA.dot(Rot, forma)
        return newPoint
    }

    projectionY2D(points){
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(3, 1, [points.get(1,1), points.get(2,1), 1])

        var Rot = new Matrix(3, 3, [
            0, 0, 0,
            0, 1, 0,
            0, 0, 1
        ])

        newPoint = LA.dot(Rot, forma)
        return newPoint
    }

    rotate2D(points, ang){
        ang = ang * Math.PI/180
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(3, 1, [points.get(1,1), points.get(2,1), 1])

        var Rot = new Matrix(3, 3,[ 
            Math.cos(ang), -(Math.sin(ang)), 0,
            Math.sin(ang), Math.cos(ang),    0,
            0,              0,               1
            ])
        
        newPoint = LA.dot(Rot, forma)
        return newPoint
    }
    
    cisalhamentoX2D(points, ang){
        ang = ang * Math.PI/180
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(3, 1, [points.get(1,1), points.get(2,1), 1])

        var Rot = new Matrix(3, 3, [
            1, Math.tan(ang), 0,
            0, 1, 0,
            0, 0, 1
        ])

        newPoint = LA.dot(Rot, forma)
        return newPoint
    }

    cisalhamentoY2D(points, ang){
        ang = ang * Math.PI/180
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(3, 1, [points.get(1,1), points.get(2,1), 1])

        var Rot = new Matrix(3, 3, [
            1, 0, 0,
            Math.tan(ang), 1, 0,
            0, 0, 1,
        ])

        newPoint = LA.dot(Rot, forma)
        return newPoint
    }

    translate2D(points, x, y){
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(3, 1, [points.get(1,1), points.get(2,1), 1])

        var Rot = new Matrix(3, 3, [
            1,0,x,
            0,1,y,
            0,0,1
        ])
        
        newPoint = LA.dot(Rot, forma)
        return newPoint
    }
    




    reflectX3D(points){
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(4, 1, [points.get(1,1), points.get(2,1), points.get(3,1), 1])

        var Rot = new Matrix(4, 4, [
            1, 0, 0,  0,
            0, -1, 0, 0,
            0, 0, -1, 0,
            0, 0, 0,  1
        ])

        newPoint = LA.dot(Rot, forma)
        return newPoint
    }

    reflectY3D(points){
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(4, 1, [points.get(1,1), points.get(2,1), points.get(3,1), 1])

        var Rot = new Matrix(4, 4, [
            -1, 0, 0, 0,
            0, 1, 0,  0,
            0, 0, -1, 0,
            0, 0, 0,  1
        ])

        newPoint = LA.dot(Rot, forma)
        return newPoint
    }

    reflectZ3D(points){
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(4, 1, [points.get(1,1), points.get(2,1), points.get(3,1), 1])

        var Rot = new Matrix(4, 4, [
            -1, 0, 0, 0,
            0, -1, 0, 0,
            0, 0, 1,  0,
            0, 0, 0,  1 
        ])

        newPoint = LA.dot(Rot, forma)
        return newPoint
    }

    projectionXZ3D(points){
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(4, 1, [points.get(1,1), points.get(2,1), points.get(3,1), 1])

        var Rot = new Matrix(4, 4, [
            1, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ])

        newPoint = LA.dot(Rot, forma)
        return newPoint
    }

    projectionYX3D(points){
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(4, 1, [points.get(1,1), points.get(2,1), points.get(3,1), 1])

        var Rot = new Matrix(4, 4, [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 1
        ])

        newPoint = LA.dot(Rot, forma)
        return newPoint
    }

    projectionZY3D(points){
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(4, 1, [points.get(1,1), points.get(2,1), points.get(3,1), 1])

        var Rot = new Matrix(4, 4, [
            0, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ])

        newPoint = LA.dot(Rot, forma)
        return newPoint
    }

    rotateX3D(points, ang){
        ang = ang * Math.PI/180
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(4, 1, [points.get(1,1), points.get(2,1), points.get(3,1), 1])
        
        var Rot = new Matrix(4,4,[
            1, 0, 0, 0,
            0, Math.cos(ang), -(Math.sin(ang)), 0, 
            0, Math.sin(ang), Math.cos(ang), 0,
            0, 0, 0, 1
            ])
        
        newPoint = LA.dot(Rot, forma)
        return newPoint
    }

    rotateY3D(points, ang){
        ang = ang * Math.PI/180
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(4, 1, [points.get(1,1), points.get(2,1), points.get(3,1), 1])
        
        var Rot = new Matrix(4,4,[
            Math.cos(ang), 0, Math.sin(ang), 0,
            0, 1, 0, 0,
            -(Math.sin(ang)), 0, Math.cos(ang), 0,
            0, 0, 0, 1
            ])
        
        newPoint = LA.dot(Rot, forma)
        return newPoint
    }
    
    rotateZ3D(points, ang){
        ang = ang * Math.PI/180
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(4, 1, [points.get(1,1), points.get(2,1), points.get(3,1), 1])
        
        var Rot = new Matrix(4,4,[
            Math.cos(ang), -(Math.sin(ang)), 0, 0,
            Math.sin(ang), Math.cos(ang), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
            ])
        
        newPoint = LA.dot(Rot, forma)
        return newPoint
    }

    cisalhamentoX3D(points, ang){
        ang = ang * Math.PI/180
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(4, 1, [points.get(1,1), points.get(2,1), points.get(3,1), 1])

        var Rot = new Matrix(4, 4, [
            1, Math.tan(ang), 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ])

        newPoint = LA.dot(Rot, forma)
        return newPoint
    }

    cisalhamentoY3D(points, ang){
        ang = ang * Math.PI/180
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(4, 1, [points.get(1,1), points.get(2,1), points.get(3,1), 1])

        var Rot = new Matrix(4, 4, [
            1, 0, 0, 0, 
            Math.tan(ang), 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ])

        newPoint = LA.dot(Rot, forma)
        return newPoint
    }

    cisalhamentoZ3D(points, ang){
        ang = ang * Math.PI/180
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(4, 1, [points.get(1,1), points.get(2,1), points.get(3,1), 1])

        var Rot = new Matrix(4, 4, [
            1, 0, Math.tan(ang), 0,
            0, 1, Math.tan(ang), 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ])

        newPoint = LA.dot(Rot, forma)
        return newPoint
    }

    translate3D(points, x, y, z){
        var newPoint
        var LA = new Linalg
        var forma = new Matrix(4, 1, [points.get(1,1), points.get(2,1), points.get(3,1), 1])
        var Rot = new Matrix(4, 4, [
            1,0,0,x,
            0,1,0,y,
            0,0,1,z,
            0,0,0,1
        ])
        
        newPoint = LA.dot(Rot, forma)
        return newPoint
    }
}