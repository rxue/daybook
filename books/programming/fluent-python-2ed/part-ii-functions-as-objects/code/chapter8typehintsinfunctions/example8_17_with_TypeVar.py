from collections import Counter
from collections.abc import Iterable
from typing import TypeVar

T = TypeVar('T')
def mode(data: Iterable[T]) -> T:
    pairs = Counter(data).most_common(1)
    if len(pairs) == 0:
        raise ValueError('no mode for empty data')
    return pairs[0][0]

if __name__ == '__main__':
    result = mode([1,2,2,3,3,3,3])
    print(result)