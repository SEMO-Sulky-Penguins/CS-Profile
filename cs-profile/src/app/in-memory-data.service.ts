import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Profile } from './profile';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const profiles = [
        {
            id: 1,
            img_path: "../../assets/images/anon.jpg", name:"Stephen Sladek",
            major:"Information Systems",
            location:"Gordonville, MO",college_status:"Senior",
            languages:"C, C++, C#, Java, JavaScript",
            interests:"Virtual Reality, Biometrics",
            organizations:["ACM-SEMO", "CS Club", "SIGAI"]
          },
          {
            id: 2,
            img_path: "../../assets/images/anon.jpg", name:"Anonymous",
            major:"Cybersecurity",
            location:"---",college_status:"Freshman",
            languages:["---"],interests:["---"],organizations:["---"]
          },
          {
            id: 3,
            img_path: "../../assets/images/Derek_Mandl.jpg", name:"Derek Mandl",
            major:"Computer Science",
            location:"Manchester, MO",college_status:"Senior",
            languages:"C, C++, Java, Python",
            interests:"Compilers Static Languages",
            organizations:["ACM-SEMO", "Camera Arts Association"]
          },
          {
            id: 4,
            img_path: "../../assets/images/anon.jpg", name:"Anonymous",
            major:"---",location:"---",college_status:"---",
            languages:["---"],interests:["---"],organizations:["---"]
          },
          {
            id: 5,
            img_path: "../../assets/images/anon.jpg", name:"Anonymous",
            major:"---",location:"---",college_status:"---",
            languages:["---"],interests:["---"],organizations:["---"]
          },
          {
            id: 6,
            img_path: "../../assets/images/anon.jpg", name:"Anonymous",
            major:"---",location:"---",college_status:"---",
            languages:["---"],interests:["---"],organizations:["---"]
          },
          {
            id: 7,
            img_path: "../../assets/images/anon.jpg", name:"Anonymous",
            major:"---",location:"---",college_status:"---",
            languages:["---"],interests:["---"],organizations:["---"]
          },
          {
            id: 8,
            img_path: "../../assets/images/anon.jpg", name:"Anonymous",
            major:"---",location:"---",college_status:"---",
            languages:["---"],interests:["---"],organizations:["---"]
          }
    ];

    return {profiles};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(profiles: Profile[]): number {
    return profiles.length > 0 ? Math.max(...profiles.map(profile => profile.id)) + 1 : 11;
  }
}
