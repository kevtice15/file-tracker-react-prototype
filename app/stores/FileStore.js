import { EventEmitter } from "events";
import dispatcher from "../dispatcher.js";
import fileList from '../data/files.json';
import fileGroupList from "../data/fileGroups.json";

class FileStore extends EventEmitter {
    constructor() {
        super();

        //Set this.files to a list of the file groups
        this.files = fileGroupList;
        
        //Add an empty array to each of the file group to hold the files (per campus)
        for(let fg of this.files){
            fg.campusList = [];
        }

        //Iterate through the file list and add them to the new array in each of the file groups
        for(let file of fileList){
            this.files[file.parent_id].campusList.push(file);
        }
        console.log("Initial file list:", this.files);
    }

    getAll() {
        return this.files;
    }

    getFileListBySubjectArea(subject_area) {
        console.log("the SA:", subject_area);
        switch(subject_area) {
            case "Contracts and Grants (CGX)": {
                var found = this.files.filter(function(element){
                    return element.subject_area === "Contracts and Grants";
                });
                break;
            }
            case "Course Enrollment": {
                var found = this.files.filter(function(element){
                    return element.subject_area === "Course Enrollment";
                });
                break;
            }
            case "Degree": {
                var found = this.files.filter(function(element){
                    return element.subject_area === "Degree";
                });
                break;
            }
            case "Graduate Admissions (GAD)": {
                var found = this.files.filter(function(element){
                    return element.subject_area === "Graduate Admissions";
                });
                break;
            }
            case "Health Science Residence (RES)": {
                var found = this.files.filter(function(element){
                    return element.subject_area === "Health Science Residence";
                });
                break;
            }
            case "Student Enrollment": {
                var found = this.files.filter(function(element){
                    return element.subject_area === "Student Enrollment";
                });
                break;
            }
            case "Student Financial Support (FAI)": {
                var found = this.files.filter(function(element){
                    return element.subject_area === "Financial Aid";
                });
                break;
            }
            case "Undergraduate Admissions (UAD)": {
                var found = this.files.filter(function(element){
                    return element.subject_area === "Undergraduate Admissions";
                });
                break;
            }
            case "University Student Aid Program (USAP)": {
                var found = this.files.filter(function(element){
                    return element.subject_area === "University Student Aid Program";
                });
                break;
            }

        }
        console.log("what is found??", found);
        return found;
    }
    
    showInnerTable(id) {
        //A function for showing 1 innner table at a time; it closes all the other open tables
        for(let file of this.files) {
            this.hideInnerTable(file.id);
        }
        this.files[id].is_selected = true;
        this.files[id].is_open = true;
        // console.log("change settings to show inner table", this.files[id]);
        this.emit("table_selection");
    }

    hideAllInnerTables() {
        console.log("hiding all inner tables");
        for(let file of this.files) {
            this.hideInnerTable(file.id);
        }
        return this.files;
    }

    toggleInnerTable(id) {
        this.files[id].is_selected = !this.files[id].is_selected;
        //this.files[id].is_open = !this.files[id].is_open;
        // console.log("change in file", this.files[id]);
        this.emit("table_selection");
    }


    openInnerTable(parent_id) {
        console.log("CHECK ON IT:",  this.files[parent_id]);
        console.log(parent_id);
        this.files[parent_id].is_open = true;
        this.emit("open_table_row");
    }

    closeInnerTable(parent_id) {
        this.files[parent_id].is_open = false;
        this.emit("close_table_row");
    }

    selectInnerTable(id) {
        this.files[id].is_selected = true;
        this.emit("select_table_row");
    }

    unselectInnerTable(id) {
        this.files[id].is_selected = false;
        this.emit("unselect_table_row");
    }

    hideInnerTable(id) {
        this.files[id].is_selected = false;
        this.files[id].is_open = false;
    }

    handleActions(action) {
        switch(action.type) {
            case "SHOW_INNER_TABLE": {
                // console.log("received open inner table action", action);
                this.showInnerTable(action.id);
                break;
            }
            case "TOGGLE_INNER_TABLE": {
                // console.log("received toggle inner table action", action);
                this.toggleInnerTable(action.id);
                break;
            }
            case "OPEN_INNER_TABLE": {
                console.log("received open inner table action", action);
                this.openInnerTable(action.parent_id);
                break;
            }
            case "CLOSE_INNER_TABLE": {
                console.log("received close inner table action", action);
                this.closeInnerTable(action.parent_id);
                break;
            }
            case "SELECT_TABLE_ROW": {
                console.log("received open inner table action", action);
                this.selectInnerTable(action.id);
                break;
            }
            case "UNSELECT_TABLE_ROW": {
                console.log("received close inner table action", action);
                this.unselectInnerTable(action.id);
                break;
            }
        }
    }
}

const fileStore = new FileStore;
dispatcher.register(fileStore.handleActions.bind(fileStore));

export default fileStore;