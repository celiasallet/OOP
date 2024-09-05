<?php
class Item {
    public $name;
    public $quantity;
    public $price_per_unit;
    public $tax_rate;

    public function __construct($name, $quantity, $price_per_unit, $tax_rate) {
        $this->name = $name;
        $this->quantity = $quantity;
        $this->price_per_unit = $price_per_unit;
        $this->tax_rate = $tax_rate;
    }

    public function getTotalPrice() {
        return $this->quantity * $this->price_per_unit;
    }

    public function getTotalTax() {
        return $this->getTotalPrice() * $this->tax_rate;
    }
}

class Basket {
    public $items = [];

    public function addItem($item) {
        $this->items[] = $item;
    }

    public function calculateTotalPrice() {
        $total_price = 0;
        foreach ($this->items as $item) {
            $total_price += $item->getTotalPrice();
        }
        return $total_price;
    }

    public function calculateTotalTax() {
        $total_tax = 0;
        foreach ($this->items as $item) {
            $total_tax += $item->getTotalTax();
        }
        return $total_tax;
    }
}

// Create basket and add items
$basket = new Basket();
$basket->addItem(new Item("Bananas", 6, 1.0, 0.06));
$basket->addItem(new Item("Apples", 3, 1.5, 0.06));
$basket->addItem(new Item("Wine", 2, 10.0, 0.21));

// Calculate and output total price and tax
$total_price = $basket->calculateTotalPrice();
$total_tax = $basket->calculateTotalTax();

echo "Total Price: €" . $total_price . "\n";
echo "Total Tax: €" . $total_tax . "\n";
?>