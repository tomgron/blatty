# blatty
Simple SignalR-React-Mobx implementation.

## Getting started

The project contains a small ASP.NET Core backend and a React/MobX
web client.  Building the application requires both the .NET SDK and
Node.js installed on your machine.

### Backend

```
dotnet restore
dotnet run --project blatty/blatty.csproj
```

### Frontend

```
cd blatty/webclient
npm install
npm start
```

By default the client build copies files to `wwwroot` so they can be
served directly from the ASP.NET application during development.

![](https://blatter.visualstudio.com/_apis/public/build/definitions/63c234e5-af95-4566-a26f-8aa1169cf8c3/1/badge)
![](https://rmprodweu1.vsrm.visualstudio.com/A54688213-7f82-4045-94b2-2d1c5391b91c/_apis/public/Release/badge/63c234e5-af95-4566-a26f-8aa1169cf8c3/1/1)
