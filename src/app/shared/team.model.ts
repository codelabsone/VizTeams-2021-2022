import { Member } from './member.model';

export class Team {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public members: Member[],
    public created_at?: string,
    public updated_at?: string,


    ) {}
}

// [
//   {
//       "id": 1,
//       "name": "Owen Wilson Fans",
//       "created_at": "2022-01-04T00:36:26.113Z",
//       "updated_at": "2022-01-04T00:36:26.113Z",
//       "description": "Wow!!!",
//       "members": [
//           {
//               "id": 1,
//               "firstName": "Zack",
//               "lastName": "Amis",
//               "title": "Software Engineer",
//               "pathToPhoto": "pathToPhoto",
//               "created_at": "2022-01-04T00:40:48.562Z",
//               "updated_at": "2022-01-04T00:40:48.562Z"
//           }
//       ]
//   },
//   {
//       "id": 2,
//       "name": "Vizient Rules",
//       "created_at": "2022-01-04T00:36:55.414Z",
//       "updated_at": "2022-01-04T00:36:55.414Z",
//       "description": "The Best Employer project, hands down",
//       "members": []
//   },
//   {
//       "id": 3,
//       "name": "No I in Team",
//       "created_at": "2022-01-04T00:37:26.006Z",
//       "updated_at": "2022-01-04T00:37:26.006Z",
//       "description": "Unless you are a bad speller",
//       "members": []
//   }
// ]
