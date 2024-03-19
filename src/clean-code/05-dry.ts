type Size = ''|'S'|'M'|'XL';
class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) {

    }

    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if((<string><unknown>this[key]).length<= 0) throw Error('key is empty');
                    break;
                case 'number':
                    if((<string><unknown>this[key]).length<= 0) throw Error('key is empty is zero');
                    
            
                default:
                    break;
            } 
        }
        return true;
    }
    toString() {
        // if(this.name.length <= 0) throw Error('name is Empty');
        // if(this.price <= 0) throw Error('price is Zero');
        // if(this.size.length <=0) throw Error('name is empty');
        // const stringProperties = ['name','size']
        if(!this.isProductReady()) return;
        return `${ this.name }, ${this.size}`;
    }
}

(
    () => {
        const bluePants = new Product('Blue Large Patns',3,'M');
        console.log(bluePants.toString());
    }
)();