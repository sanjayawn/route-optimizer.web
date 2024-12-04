import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DijkstraService } from '../../services/dijkstra.service';

@Component({
  selector: 'app-dijkstra-calculator',
  templateUrl: './dijkstra-calculator.component.html',
  styleUrls: ['./dijkstra-calculator.component.css']
})
export class DijkstraCalculatorComponent {
  response: any;
  dijkstraForm: FormGroup;
  nodes: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G']; // Example nodes
  result: { fromNode: string; toNode: string; path: string[]; distance: number } | null = null;

  constructor(
    private fb: FormBuilder,
    public apiService: DijkstraService,) {
    this.dijkstraForm = this.fb.group({
      fromNode: ['', Validators.required],
      toNode: ['', Validators.required],
    });
  }

  calculatePath() {
    if (this.dijkstraForm.valid) {
      const { fromNode, toNode } = this.dijkstraForm.value;

      const payload = {
        From: this.dijkstraForm.value.fromNode,
        To: this.dijkstraForm.value.toNode
      };

      this.apiService.GetShortestPath(payload).subscribe(
        data => {
          console.log('Response:', data);
          this.response = data;
      this.result = {
        fromNode,
        toNode,
        path: this.response.data.nodeNames,
        distance: this.response.data.distance,
      };
        },
        error => {
          console.error('Error:', error);
        }
      );

    }
  }

  resetForm() {
    this.dijkstraForm.reset();
    this.result = null;
  }
}
