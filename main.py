def calculate_total(price: float, tax: float) -> float:
    """Calculate the total price including tax."""
    return price + (price * tax)

print(calculate_total(100.0, 0.05))