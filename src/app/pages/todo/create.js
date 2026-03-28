// src/app/pages/example/create.example.js

import { CreateTheConnectionLocal, LocalSyncData, MakeTheInstanceConceptLocal, PatcherStructure, PRIVATE, UpdateComposition } from "mftsccs-browser";
import { StatefulWidget } from "mftsccs-browser";
import './phonebook.style.css';
import { getLocalUserId } from "../user/login.service";

export class create extends StatefulWidget {

    after_render() {
        let userId = getLocalUserId();
        let order = 1;
        let name = this.getElementById("name");
        let phone = this.getElementById("phone");
        let id = this.getElementById("id");
        if(this.data){
            name.value = this.data.name;
            phone.value = this.data.phone;
            id.value = this.data.id;
        }
        let submitButton = this.getElementById("submit");
        if(submitButton){
            submitButton.onclick = (ev) => {
                ev.preventDefault();

                if(id.value){
                    let patcherStructure = new PatcherStructure();
                    patcherStructure.compositionId = Number(id.value);
                    patcherStructure.patchObject = {
                        "name": name.value,
                        "phone": phone.value
                    }
                    UpdateComposition(patcherStructure);
                }
                else{
                    MakeTheInstanceConceptLocal("the_phonebook", "", true,userId,PRIVATE).then((mainconcept)=> {
                        MakeTheInstanceConceptLocal("name", name.value,false, userId, PRIVATE).then((concept)=>{
                            MakeTheInstanceConceptLocal("phone", phone.value, false, userId,PRIVATE).then((concept2) => {
                                CreateTheConnectionLocal(mainconcept.id, concept.id, mainconcept.id, order, "", userId).then(()=>{
                                    CreateTheConnectionLocal(mainconcept.id, concept2.id, mainconcept.id, order, "", userId).then(()=>{
                                        LocalSyncData.SyncDataOnline();
                                    })
                                })
                            });
                        });
                    });
                }

                console.log("submit button clicked");
            }
        }
    }

    getHtml() {
        let html = `<div class="container">
        <form>
            <div>
                <input type="number" id="id" hidden>
                <div class="formbody">
                    <label> name </label>
                    <input type="text" id="name" placeholder="name">
                </div>
                <div class="formbody">
                    <label> number </label>
                    <input type="number" id="phone" placeholder="phone">
                </div>
                <button class="btn btn-primary" id="submit" type="submit">Submit</button>
            </div>
        </form>
        </div>`;
        return html;
    }
}