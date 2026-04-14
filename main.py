"""Module for demonstrating a clean, lint-compliant Python function."""

def calculate_square(number: int) -> int:
    """Calculates the square of an integer.

    Args:
        number: The integer to be squared.

    Returns:
        The square of the input number.
    """
    return number * number


if __name__ == "__main__":
    # Added type hint here to satisfy strict 'ANN' (Annotation) rules
    result: int = calculate_square(5)
    print(f"The result is {result}")