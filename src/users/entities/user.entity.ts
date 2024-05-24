import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class User {//como se va a comportar el usuario en la db, que propidades y valores va a tenrer
    @Column({primary:true,generated:true})
    id:number;

    @Column()
    name:string;

    @Column({unique:true,nullable:false})
    email:string;

    @Column({nullable:false})
    password:string;

    @Column({default:'user'})
    role:string;

    @DeleteDateColumn()
    deletedAt:Date;
}
