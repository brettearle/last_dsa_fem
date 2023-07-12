//is const a = [] an array? no because js

const a = new ArrayBuffer(6);
console.log(a);

const a8 = new Uint8Array(a);
a8[2] = 45;

const a16 = new Uint16Array(a);
a16[2] = 63;

console.log(a);
console.log(a8);
console.log(a16);

// Array buffers are set in memory, real arrays
//
// -------------------------------------------------------------------------
// Linear Search Big O = o(N)

const linearSearch = (arr: number[], searchTerm: number): boolean => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchTerm) {
      return true;
    }
  }
  return false;
};

console.log(linearSearch([1, 2, 3], 34));

console.log(linearSearch([1, 2, 3], 3));

//--------------------------------------------------------------------------
// Binary Search Big O = (logN)

const binarySearch = (arr: number[], searchTerm: number) => {
  let lo = 0;
  let hi = arr.length;
  do {
    const mid = Math.floor(lo + (hi - lo) / 2);
    const val = arr[mid];
    if (val === searchTerm) {
      return true;
    } else if (val > mid) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  } while (lo < hi);
  return false;
};

console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));

//-----------------------------------------------------------------------------
// Two  Crystal ball Problem - Big O (sqrtN)

const crystalBall = (breaks: boolean[]): number => {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jmpAmount;
  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jmpAmount;

  for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
};

console.log(crystalBall([true, true, true, true, true, true]));
console.log(crystalBall([false, true, true, true, true, true]));
console.log(crystalBall([false, false, false, false, false, false]));

//----------------------------------------------------------------------------------
//Bubble Sort Big O is n^2

const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - (i + 1); ++j) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};

console.log(JSON.stringify(bubbleSort([1, 3, 5, 2, 4])));

//-------------------------------------------------------------------------------------
// Linked List - Node based data structure
// TODO! implement this later

//-------------------------------------------------------------------------------------
// Queue - first in first out

interface Queue<T> {
  length: number | null;
  head?: QNode<T> | null;
  tail?: QNode<T> | null;
  enqueue: (item: any) => void;
  deque: () => T | undefined;
  peek: () => T | undefined;
}

type QNode<T> = {
  value: T;
  next?: QNode<T>;
};

const numQueueConstructor = (): Queue<number> => {
  return {
    length: 0,
    head: null,
    tail: null,
    enqueue: (item: number) => {
      const itemAsNode = { value: item } as QNode<Number>;
      this.length++;
      if (!this.tail) {
        this.tail = this.head = itemAsNode;
      }
      this.tail.next = itemAsNode;
      this.tail = itemAsNode;
    },
    deque: () => {
      if (!this.head) {
        return null;
      }
      this.length--;
      const head = this.head;
      this.head = this.head.next;
      return head.value;
    },
    peek: () => {
      return this.head?.value;
    },
  };
};

//-----------------------------------------------------------------------------
// Stack "pretty much constant time"

type SNode<T> = {
  value: T;
  prev?: SNode<T>;
};

function buildAStack<T>(snode: SNode<T>) {
  const stack = {
    length: 0,
    head: undefined as SNode<T> | undefined,
    push: (item: T): void => {
      if (stack.head === undefined) {
        const snode = { value: item } as SNode<T>;
        stack.head = snode;
        return;
      }

      snode.prev = stack.head;
      stack.head = snode;
    },
    pop: (): T | undefined => {
      stack.length = Math.max(0, stack.length - 1);
      if (stack.length === 0) {
        const savedHead = stack.head;
        stack.head = undefined;
        return savedHead?.value;
      }
      const savedHead = stack.head;
      stack.head = stack.head?.prev;
      return savedHead?.value;
    },
    peek: (): T | undefined => {
      return stack.head?.value;
    },
  };

  return {
    stack,
  };
}
