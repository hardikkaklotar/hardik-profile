import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  grid: { icon: string | null }[] = [];
  bombCount = 1;
  gameOver = false;
  gameStarted = false;
  showBombSelection = false; // Controls visibility of the bomb selection
  bombIndexes: Set<number> = new Set();
  bombOptions = Array.from({ length: 10 }, (_, i) => i + 1); // [1,2,3,...,10]

  constructor() {
    this.initGrid();
  }

  handleClick(index: number) {
    if (!this.gameStarted || this.grid[index].icon !== null || this.gameOver) return;

    if (this.bombIndexes.has(index)) {
      this.grid[index].icon = '💣';
      this.gameOver = true;
      this.revealAllIcons();
    } else {
      this.grid[index].icon = '💎';
    }
  }

  startGame() {
    this.gameStarted = true;
    this.gameOver = false;
    this.showBombSelection = false;
    this.initGrid();
    this.placeBombs();
  }

  resetBombCount() {
    this.showBombSelection = true; // Show bomb selection again
  }

  confirmBombSelection() {
    this.showBombSelection = false; // Hide selection
    this.placeBombs();
  }

  updateBombs() {
    if (!this.gameStarted) {
      this.placeBombs();
    }
  }

  initGrid() {
    this.grid = new Array(25).fill(null).map(() => ({ icon: null }));
  }

  placeBombs() {
    this.bombIndexes.clear();
    while (this.bombIndexes.size < this.bombCount) {
      const randomIndex = Math.floor(Math.random() * this.grid.length);
      this.bombIndexes.add(randomIndex);
    }
  }

  revealAllIcons() {
    this.grid = this.grid.map((box, index) => ({
      icon: this.bombIndexes.has(index) ? '💣' : '💎'
    }));
  }
}
