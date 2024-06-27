# Score+ | The organization evaluation system

Score+ (score plus) is a vulnerability evaluation platform which enables organisations to assess their risk exposure based on a variety of factors.

## Score+ at a glance

Score+ uses a variety of tools to enable companies to establish and evaluate their vulnerability level starting from an initial CVE assessment.\
At its core, the system uses external libraries such as [cvwelib](https://github.com/colelli/cvwelib) and [DetectiveAttacks](https://github.com/nicolabalzano/DetectiveAttacks) to fetch the required data.

## Score+ setup
Setting up Score+ is as easy as cloning the repository in the desired directory.

> **Important dependencies**
>
> The system is dependant on two external libraries as stated before, therefore it is mandatory, for a correct use, to run an instance of both `cvwelib` and `DetectiveAttacks` simultaneously. On top of this, `Score+` depends on the use of `npm`.

Once all the required depences have been installed and run, the system can be executed simply running the `Controller.py` module inside `/src/controller/`, which will automatically start-up the Flask interface and allow comunication with both the `Dao.py` module, as well as the external APIs.

> [!NOTE]
> Server IP configuration must be defined in the `/src/controller/utils/ControllerUitls.py` module and `/src/view/utils/Utils.jsx` module.

To run an instance of the web application simply execute:

```bash
npm run dev
```

Where `npm` is the directory in which it is installed (unless an environment variable has been previously set).

### Files

Score+ relies on the use of two local files stored inside `/src/model/files/`:

- `ASSETS.json` is a local database of the user asset preferences which is used during the asset-based score computation
- `HISTORY.json` is a local database of all organisation evaluation runs

The `HISTORY` file is automatically created by the system as an empty list, whilst the `ASSETS` file is available by default in the default repository with a base value of `1.0` for each provided asset.
