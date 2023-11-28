import 'package:flutter/material.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:sliding_puzzle/codes/puzzle_code.dart';

class Puzzle_page extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Sliding Puzzle',
          style: TextStyle(color: Colors.white),
        ),
        backgroundColor: HexColor("#313527"),
      ),
      body: Center(
        child: Column(children: <Widget>[
          Puzzle(),
        ]),
      ),
    );
  }
}
