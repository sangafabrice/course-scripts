### Exercise 1

**_Selection sort_** is named because it incrementally sorts an array from left to right, repeatedly selecting the smallest element remaining and swapping it into its proper location. Initially, the smallest element in the array is swapped with the first element. Then, the next smallest element is swapped with the second element, and this process continues until the entire array is sorted.

1) At each iteration of the selection sort algorithm, two key actions are performed. What are they?

2) Modify the pseudo-code below to create a new procedure named `MINIMUM_INDEX` that returns the position (index) of the minimum value in the array. Add an additional input parameter specifying a starting index $s<n$, so that the search begins from index $s$ instead of $0$.
   
$\qquad\text{MAXIMUM}(A, n)$</br>
$\qquad max \longleftarrow A[0]$</br>
$\qquad\boldsymbol{\text{for}} \ i \longleftarrow 1 \ \boldsymbol{\text{to}} \ n - 1 \ \boldsymbol{\text{do}}$</br>
$\qquad\quad\boldsymbol{\text{if}} \ max < A[i] \ \boldsymbol{\text{then}}$</br>
$\qquad\qquad max \longleftarrow A[i]$</br>
$\qquad\boldsymbol{\text{return}} \ max$

4) Write the pseudo-code for a procedure that swaps two elements of an array. The procedure should take as input the array and the indices of the two elements to be swapped.

5) Trace the execution of the selection sort algorithm step by step on the array $[23, 12, 15, 26, 10, 11]$. At each iteration, let $s$ denote the index of the first element of the unsorted portion of the array. For each iteration $s$, indicate:
	- the minimum element found in the portion starting at index $s$, and
	- the swap operation to perform
	- the state of the array after each iteration.

| $\boldsymbol{s}$ | $\text{MINIMUM}$ | $\text{SWAP}$ | $A[0]$ | $A[1]$ | $A[2]$ | $A[3]$ | $A[4]$ | $A[5]$ |
| ---------------- | :--------------: | ------------- | :----: | :----: | :----: | :----: | :----: | :----: |
| 0                |                  |               |   23   |   12   |   15   |   26   |   10   |   11   |
| 1                |                  |               |        |        |        |        |        |        |
| 2                |                  |               |        |        |        |        |        |        |
| 3                |                  |               |        |        |        |        |        |        |
| 4                |                  |               |        |        |        |        |        |        |
| 5                |                  |               |        |        |        |        |        |        |

5) Prove that the array $A$ is sorted when $s = n - 1$ in the selection sort algorithm, where $n$ is the size of the array and $s$ is the index of the first element of the unsorted portion.

	5.1) State the loop invariant maintained by the selection sort algorithm. What can be said about the subarrays $A[0…s−1]$ and $A[s…n−1]$ at the start of each iteration?

	5.2) Using the loop invariant method (initialization, maintenance, and termination), prove the correctness of the selection sort algorithm. Assume that the algorithm terminates when $s=n−1$.

	5.3) Using the termination condition of the loop invariant, determine, in terms of $n$ (the size of the array), the minimum number of iterations required for selection sort to produce a fully sorted array.

6) Write the pseudo-code for `SELECTION_SORT` by calling the procedures `MINIMUM_INDEX` and `SWAP`. Your algorithm should use the minimum number of iterations required (in terms of $n$) to sort the array.







