export class Member {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public title: string,
    public pathToPhoto: string,
    public created_at?: string,
    public updated_at?: string,
    public team?: any,
  ) {}
}


// {
//   "id": 1,
//   "firstName": "Zack",
//   "lastName": "Amis",
//   "title": "Software Engineer",
//   "pathToPhoto": null,
//   "created_at": "2022-01-04T00:40:48.562Z",
//   "updated_at": "2022-01-11T01:38:25.469Z",
//   "team": {
//       "id": 1,
//       "name": "Owen Wilson Fans",
//       "created_at": "2022-01-04T00:36:26.113Z",
//       "updated_at": "2022-01-04T00:36:26.113Z",
//       "description": "Wow!!!"
//   }
// }
