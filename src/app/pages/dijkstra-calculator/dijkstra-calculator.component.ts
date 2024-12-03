import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dijkstra-calculator',
  templateUrl: './dijkstra-calculator.component.html',
  styleUrls: ['./dijkstra-calculator.component.css']
})
export class DijkstraCalculatorComponent {
  dijkstraForm: FormGroup;
  nodes: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G']; // Example nodes
  result: { fromNode: string; toNode: string; path: string[]; distance: number } | null = null;

  constructor(private fb: FormBuilder) {
    this.dijkstraForm = this.fb.group({
      fromNode: ['', Validators.required],
      toNode: ['', Validators.required],
    });
  }

  calculatePath() {
    if (this.dijkstraForm.valid) {
      const { fromNode, toNode } = this.dijkstraForm.value;

      // Simulating Dijkstra's algorithm result
      // Replace this logic with actual algorithm computation
      this.result = {
        fromNode,
        toNode,
        path: [fromNode, 'B', 'C', toNode], // Example path
        distance: 10, // Example distance
      };
    }
  }

  resetForm() {
    this.dijkstraForm.reset();
    this.result = null;
  }
}