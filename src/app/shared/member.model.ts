export class Member {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public title: string,
    public pathToPhoto: string,
    public created_at?: string,
    public updated_at?: string
  ) {}
}


// "id": 1,
//                 "firstName": "Zack",
//                 "lastName": "Amis",
//                 "title": "Software Engineer",
//                 "pathToPhoto": "pathToPhoto",
//                 "created_at": "2022-01-04T00:40:48.562Z",
//                 "updated_at": "2022-01-04T00:40:48.562Z"
