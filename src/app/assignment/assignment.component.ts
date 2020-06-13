
import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Assignment } from './assignment';
import { ASSIGNMENT } from '../mock-assignment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
   
  
    query = '';
    assignments= ASSIGNMENT;
    addNew(name: HTMLInputElement,description:HTMLInputElement){
      const asd={
        name:name.value,
        description:description.value
      }
      this.assignments.push(asd);
      console.log(this.assignment);
     
    }
    selectedAssignment = {};
    filterAssignment = ASSIGNMENT;
   
    
	@Input() assignment : Assignment;
	

constructor(private router: Router, private activatedRoute: ActivatedRoute) { 

}

  ngOnInit() {
  }
  onSelect(assignment: Assignment): void {
      this.selectedAssignment = assignment;
      this.router.navigate(['/assignment'], {
        relativeTo: this.activatedRoute, 
        queryParams: {key: this.selectedAssignment ? this.selectedAssignment['key'] : '' }
      })
      } 
    onSearch(query){
      this.filterAssignment = this.assignments.filter((item) => {
        if(item.name.toLowerCase().indexOf(query.toLowerCase())>-1){
            return item;
        }
      })
      
    } 
    // addTopic(topic: HTMLInputElement){
    //    this.topics.push(new FormControl(topic.value));
    // }
    // get topics(){
    //   return this.form.get('topics') as FormArray;
    // }
}
