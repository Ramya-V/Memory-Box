import { Injectable } from '@angular/core';
import { memory } from '../schema/memory';


@Injectable({
    providedIn: 'root', 
})
export class memoryboxService {

memoryBoxContent: any;
  constructor() {}

    //Memory Entry
    memoryBox(): Array<memory> {
     this.memoryBoxContent =[
        {id: 1, 
         title: "LIFE",
         content:"Life is a Mystery",
        },
      ];
      return this.memoryBoxContent;
    }

    // Removes the Memory
    remove(entry): Array<memory> {
        this.memoryBoxContent = this.memoryBoxContent.filter((element) => {
        return element["id"] !== entry["id"];
      });
      return this.memoryBoxContent;
    }

    //adds Memory
    addMemory(data): Array<memory> {
    //last entry in the array
     var lastEntryId = this.memoryBoxContent[(this.memoryBoxContent.length)-1]["id"];
   
    // adds a entry 
    this.memoryBoxContent.push({ id: lastEntryId + 1, title: data.title, content: data.content });
    return this.memoryBoxContent;
    }

} 
