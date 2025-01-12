#include <iostream>
using namespace std;
class Shop {
    public:
        char product[20];  
        int price;         
};

int main() {
    Shop p1[4];  
    cin >> p1[0].product;  
    cin >> p1[0].price;    
    cout << "Product: " << p1[0].product << endl;
    cout << "Price: " << p1[0].price << endl;

    return 0;
}
