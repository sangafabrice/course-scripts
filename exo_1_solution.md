### Exercise 1

1)  The two key actions performed:
	- Selecting the smallest element
	- Swapping

2) The pseudo-code for `MINIMUM_INDEX`

|     | $\text{MINIMUM\\\_INDEX}(A, n, s)\qquad\qquad$<br>$min \longleftarrow A[s]$<br>$minindex \longleftarrow s$<br>$\boldsymbol{\text{for}} \ i \longleftarrow s+1 \ \boldsymbol{\text{to}} \ n - 1 \ \boldsymbol{\text{do}}$<br>$\quad\boldsymbol{\text{if}} \ min > A[i] \ \boldsymbol{\text{then}}$<br>$\qquad min \longleftarrow A[i]$<br>$\qquad minindex \longleftarrow i$<br>$\boldsymbol{\text{return}} \ minindex$ |     | $\text{MINIMUM\\\_INDEX}(A, n, s)\qquad\qquad$<br>$minindex \longleftarrow s$<br>$\boldsymbol{\text{for}} \ i \longleftarrow s+1 \ \boldsymbol{\text{to}} \ n - 1 \ \boldsymbol{\text{do}}$<br>$\quad\boldsymbol{\text{if}} \ A[minindex] > A[i] \ \boldsymbol{\text{then}}$<br>$\qquad minindex \longleftarrow i$<br>$\boldsymbol{\text{return}} \ minindex$ |
| --- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

3) The pseudo-code for `SWAP`

|     | $\text{SWAP}(A, s, i)\qquad\qquad$<br>$temp \longleftarrow A[s]$<br>$A[s] \longleftarrow A[i]$<br>$A[i] \longleftarrow temp$ |
| --- | :--------------------------------------------------------------------------------------------------------------------------- |

4) Execution tracing of the problem instance

|              $\boldsymbol{s}$               |               $\text{MINIMUM}$               |                   $\text{SWAP}$                   |                    $A[0]$                    |                    $A[1]$                    |                    $A[2]$                    |                    $A[3]$                    |                    $A[4]$                    | $A[5]$ |
| :-----------------------------------------: | :------------------------------------------: | :-----------------------------------------------: | :------------------------------------------: | :------------------------------------------: | :------------------------------------------: | :------------------------------------------: | :------------------------------------------: | :----: |
|                      0                      |                      10                      |                      23 & 10                      |                      23                      |                      12                      |                      15                      |                      26                      |                      10                      |   11   |
|                      1                      |                      11                      |                      12 & 11                      | <span style="color:rgb(0, 255, 0)">10</span> |                      12                      |                      15                      |                      26                      |                      23                      |   11   |
|                      2                      |                      12                      |                      15 & 12                      | <span style="color:rgb(0, 255, 0)">10</span> | <span style="color:rgb(0, 255, 0)">11</span> |                      15                      |                      26                      |                      23                      |   12   |
|                      3                      |                      15                      |                      15 & 15                      | <span style="color:rgb(0, 255, 0)">10</span> | <span style="color:rgb(0, 255, 0)">11</span> | <span style="color:rgb(0, 255, 0)">12</span> |                      26                      |                      23                      |   15   |
|                      4                      |                      23                      |                      23 & 23                      | <span style="color:rgb(0, 255, 0)">10</span> | <span style="color:rgb(0, 255, 0)">11</span> | <span style="color:rgb(0, 255, 0)">12</span> | <span style="color:rgb(0, 255, 0)">15</span> |                      23                      |   26   |
| <span style="color:rgb(255, 0, 0)">5</span> | <span style="color:rgb(255, 0, 0)">26</span> | <span style="color:rgb(255, 0, 0)">26 & 26</span> | <span style="color:rgb(0, 255, 0)">10</span> | <span style="color:rgb(0, 255, 0)">11</span> | <span style="color:rgb(0, 255, 0)">12</span> | <span style="color:rgb(0, 255, 0)">15</span> | <span style="color:rgb(0, 255, 0)">23</span> |   26   |

5) Proof

	5.1) Loop invariant
		 $(1)$ The subarray $A[0…s−1]$ contains the $s$ smallest elements of the array in sorted order, and
		 $(2)$ All elements in $A[s…n−1]$ are greater than or equal to $A[s−1] \ (s > 0)$.

	5.2) Loop invariant proof
	- **Initialization** (Base case)
		Before the first iteration, s = 0:
		The subarray $A[0…-1]$ is empty and is trivially sorted $(1)$. The condition $(2)$ holds vacuously because $A[0…-1]$ is empty.
	- **Maintenance** (Inductive step)
		- [ ] Assume the loop invariant holds at the start of iteration $k$.
		- [ ] Selection sort selects the smallest element of $A[k…n-1]$, and swaps it with $A[k]$ $(3)$. 
		- [ ] Since $A[k] \geq A[k-1]$ $(2)$, and $A[0…k−1]$ is sorted $(1)$, then $A[0…k]$ is sorted,
		- [ ] Since all elements in $A[k+1…n-1]$ are greater than or equal to $A[k]$ $(3)$,
		- [ ] The loop invariant holds at the start of the iteration $k+1$.
	- **Termination**
		The algorithm terminates when $s=n−1$.
		Then:
		$(1)$ $A[0…n−2]$ contains the $n−1$ smallest elements in sorted order.
		$(2)$ The last element $A[n-1] \geq A[n-2]$.
		**Therefore: The entire array $A$ is sorted.**

	5.3) $n−1$.

6) The pseudo-code for `SELECTION_SORT`

|     | $\text{SELEC}\text{TION\\\_SORT}(A, n)$<br>$\boldsymbol{\text{for}} \ s \longleftarrow 0 \ \boldsymbol{\text{to}} \ n - 2 \ \boldsymbol{\text{do}}$<br>$\quad minindex \longleftarrow \text{MINIMUM\\\_INDEX}(A, n, s)$<br>$\quad\text{SWAP}(A, s, minindex)$ |     | $\text{SELEC}\text{TION\\\_SORT}(A, n)$<br>$\boldsymbol{\text{for}} \ s \longleftarrow 0 \ \boldsymbol{\text{to}} \ n - 2 \ \boldsymbol{\text{do}}$<br>$\quad minindex \longleftarrow \text{MINIMUM\\\_INDEX}(A, n, s)$<br>$\quad\boldsymbol{\text{if}} \ minindex \neq s \ \boldsymbol{\text{then}}$<br>$\qquad\text{SWAP}(A, s, minindex)$<br><br><br> |
| --- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
