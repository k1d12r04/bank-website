import { clients } from '../constants';

const Clients = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-10 md:gap-32">
      {clients.map(client => (
        <div
          key={client.id}
          className={`${client.name === 'coinbase' && 'self-start'} ${
            client.name === 'dropbox' && '-mt-2'
          } `}
        >
          <img className="w-48" src={client.logo} alt="client logo" />
        </div>
      ))}
    </div>
  );
};

export default Clients;
