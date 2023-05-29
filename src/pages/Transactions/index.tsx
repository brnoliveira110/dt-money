import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionContext";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { useContext } from "react";

interface Transactions {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createAt: string;
}

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
