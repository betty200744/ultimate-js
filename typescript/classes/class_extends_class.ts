import {BaseEntity, Column} from "typeorm"

export default class TeamUser extends BaseEntity {
    @Column('uuid')
    id: string
    @Column({name: 'team_id'})
    team_id: string
    @Column({name: "user_id"})
    user_id: string
}