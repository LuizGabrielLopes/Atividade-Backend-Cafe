## GET Buscar Pedido

http://localhost:4000/api/menu

## GET Buscar por ID

http://localhost:4000/api/order/48b83c78-4153-49f5-a391-b467ba02bb84

## POST Cadastrar novo pedido

http://localhost:4000/api/order

Body raw (json)
{
    "produto": "Café amargo",
    "preco": 5.00,
    "status": "Pronto"
}

## DELETE excluir um pedido 

http://localhost:4000/api/order/359883ca-c7ef-481c-8ec4-b882f5a228f9