class Linalg{


    add(a, b){
		if(typeof(a)== "number"){
			if(!(b instanceof Matrix))throw"o parametro b deve ser um objeto do tipo matrix" 

			var res = new Matrix(b.rows, b.cols);

    for(var i = 1; i <= b.rows; i++){
        for(var j = 1; j<= b.cols;j++){
            res.set(i,j, a + b.get(i,j))
        }
    }
    return res;
		}else if(typeof(a) == "object"){
			if(!(a instanceof Matrix)) throw"o parametro a deve ser um objeto do tipo matrix"
			if(!(b instanceof Matrix))throw"o parametro b deve ser um objeto do tipo matrix" 
			if(!(a.rows == b.rows && a.cols == b.cols))throw"as matrizes nao possume as mesmas dimenses"
    
			var res = new Matrix(a.rows, a.cols);


    for(var i = 1; i <= a.rows; i++){
        for(var j = 1; j<= a.cols;j++){
         		 res.set(i,j, a.get(i,j) + b.get(i,j))
		}
    }   

return res;

    }
	}

    sub(a, b){
        if(typeof(a)== "number"){
			if(!(b instanceof Matrix))throw"o parametro b deve ser um objeto do tipo matrix" 

			var res = new Matrix(b.rows, b.cols);

    for(var i = 1; i <= b.rows; i++){
        for(var j = 1; j<= b.cols;j++){
            res.set(i,j, b.get(i,j) - a)
        }
    }
    return res;
		}else if(typeof(a) == "object"){
			if(!(a instanceof Matrix)) throw"o parametro a deve ser um objeto do tipo matrix"
			if(!(b instanceof Matrix))throw"o parametro b deve ser um objeto do tipo matrix" 
			if(!(a.rows == b.rows && a.cols == b.cols))throw"as matrizes nao possume as mesmas dimenses"
    
			var res = new Matrix(a.rows, a.cols);


    for(var i = 1; i <= a.rows; i++){
        for(var j = 1; j<= a.cols;j++){
         		 res.set(i,j, a.get(i,j) - b.get(i,j))
		}
    }   

return res;

    }
    }

    mul(a, b){
        if(typeof(a)== "number"){
			if(!(b instanceof Matrix))throw"o parametro b deve ser um objeto do tipo matrix" 

			var res = new Matrix(b.rows, b.cols);

    for(var i = 1; i <= b.rows; i++){
        for(var j = 1; j<= b.cols;j++){
            res.set(i,j, b.get(i,j) * a)
        }
    }
    return res;
		}else if(typeof(a) == "object"){
			if(!(a instanceof Matrix)) throw"o parametro a deve ser um objeto do tipo matrix"
			if(!(b instanceof Matrix))throw"o parametro b deve ser um objeto do tipo matrix" 
			if(!(a.rows == b.rows && a.cols == b.cols))throw"as matrizes nao possume as mesmas dimenses"
    
			var res = new Matrix(a.rows, a.cols);


    for(var i = 1; i <= a.rows; i++){
        for(var j = 1; j<= a.cols;j++){
         		 res.set(i,j, a.get(i,j) * b.get(i,j))
		}
    }   

return res;

    }



    }
    
    div(a,b){
            if( !(a instanceof Matrix)) throw "paramenro A deve ser um objeto do tipo matrix"
            if( !(b instanceof Matrix)) throw "paramenro B deve ser um objeto do tipo matrix"
            if( !(a.rows == b.rows && a.cols == b.cols)) throw "As matrizes nao possuem as mesmas dimensoes"
            
            for(var k = 1; k <= b.elements.length;k++){
                if(b.elements[k] == 0){
                    throw "Os elementos da matrix devem ser diferentes de 0"
                }  
            }
    
            var res = new Matrix(a.rows, a.cols)
    
            for(var i = 1; i <= a.rows;i++){
                for(var j = 1;j <= a.cols;j++){
                    res.set(i, j, a.get(i, j) / b.get(i, j))  
                }
            }
            return res
        }
    
   

  
    dot(a, b){
        if(!(a instanceof Matrix)) throw"o parametro a deve ser um objeto do tipo matrix"
        if(!(b instanceof Matrix))throw"o parametro b deve ser um objeto do tipo matrix"  
        if(!(a.cols == b.rows))throw"nao possuem as dimensoes necessarias"

        
        var res = new Matrix(a.rows, b.cols);

        for(var i=1;i<=a.rows;i++){
            for(var j=1;j<=b.cols;j++){
                for(var k=1;k<=a.cols;k++){
                    res.set(i, j, (a.get(i,k) * b.get(k,j)) + res.get(i,j))
                }  
            }

        }
		return res;
		
    }

    transpose(a){
        if( !(a instanceof Matrix)) throw "paramenro A deve ser do tipo matrix"
        var res = new Matrix(a.cols, a.rows)
        
        for(var i = 1; i <= a.cols;i++){
            for(var j = 1;j <= a.rows;j++){
                res.set(i, j, a.get(j, i))
            }
        }
        return res
    
}


    solve(a){
        
    if(!(a instanceof Matrix)) throw "paramenro A deve ser um objeto do tipo matrix"

    var res = new Matrix(a.rows, a.cols)

    for(var i = 1; i <= a.rows; i++){//Duplicando matrix a
        for(var j = 1; j <= a.cols; j++){
            res.set(i, j, a.get(i, j))
        }
    }
//Encontrar o maior elemento
    for(var i = 1; i <= a.rows; i++){
        var maxElemento = Math.abs(res.get(i, i))
        var maxLinha = i
        for(var k = i + 1; k < a.rows + 1; k++){
          if(Math.abs(res.get(k, i)) > maxElemento){
            maxElemento = Math.abs(res.get(k, i))
            maxLinha = k               
          }  
        }
         //Inverte a linha
        for(var k = i; k < a.cols + 1; k++){
            var aux = res.get(maxLinha, k)
            res.set(maxLinha, k, res.get(i, k))
            res.set(i, k, aux)
        }
     //Executa o triangulo de zero inferior
     for(k = i + 1; k < a.rows + 1; k++){
            var c = -res.get(k, i)/res.get(i, i)

            for(var j = i; j < a.cols + 1; j++){
                if(i == j){//Da zero
                    res.set(k, j, 0)
                }else{
                    res.set(k, j, c*res.get(i, j) + res.get(k, j))//Multiplica elmentos da linha
                }
            }
        }
    }
    //Executar triangulo de zero superior
    for(var w = a.rows; w > 1; w--){
        for(var k = w - 1; k > 0; k--){
            var y = -res.get(k, w)/res.get(w, w)

            for(var j = a.cols; j > w - 1; j--){
                if(w == j){//zero
                    res.set(k, j, 0)
                }else{
                    res.set(k, j, y * res.get(w, j) + res.get(k, j))
                }
            }
        }
    }
    //Tranformar a diagonal em 1
    for(var i = a.rows; i > 0; i--){
        res.set(i, a.rows + 1, res.get(i, a.rows + 1) / res.get(i, i))
        res.set(i, i, 1)
    }


    return res
    }

}



