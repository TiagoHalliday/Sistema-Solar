class Matrix{


constructor(rows, cols, elements){
this.rows = rows;
this.cols = cols;

if(elements == undefined){
    this.elements = new Array(this.rows * this.cols)
    for(var i = 0;i < this.rows*this.cols;i++){
        this.elements[i] = 0;
        }
    }else{
        if(rows * cols == elements.length ){
            this.elements = elements;
        }else{
            throw "a quantida de elementos nao e compativel com  a quantidade de linhas e colunas "
        }
    
    }

}

 get(i, j){
        if(i <= 0 ||i > this.rows)throw "linha nao compativel com as dimensoes da matrix"
        if(j <= 0 ||j > this.cols)throw "coluna nao compativel com as dimensoes da matrix"
        return this.elements[(j-1) + (i-1) * this.cols];

}

 set(i, j, value){
    if(i <= 0 ||i > this.rows)throw "linha nao compativel com as dimensoes da matrix"
    if(j <= 0 ||j > this.cols)throw "coluna nao compativel com as dimensoes da matrix"    
    this.elements[(j-1) + (i-1) * this.cols] = value;
}

}