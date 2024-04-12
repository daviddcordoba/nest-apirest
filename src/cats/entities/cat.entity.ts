import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity() //
export class Cat {
    @Column({primary:true, generated:true})

    id:number  

    @Column()
    name:string

    @Column()
    age:number

    @Column()
    breed:string
}

/*cada vez que queramos trabajr con db en nest, atacamos aca. 
van a ser cada una de laspropiedas e informacion que se va a guardar en la db 
vamos a usar typeorm -> es como sequelize.. */