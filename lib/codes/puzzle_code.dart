import 'package:flutter/material.dart';
import 'package:sliding_puzzle/codes/images_.dart';
import 'package:sliding_puzzle/codes/movements.dart';
import 'dart:math';

ImagesUrl img = ImagesUrl();
List img_packs = [img.img1, img.img2, img.img3, img.img4, img.img5, img.img6];

class Puzzle extends StatefulWidget {
  const Puzzle({
    Key? key,
  }) : super(key: key);

  @override
  _PuzzleState createState() => _PuzzleState();
}

class _PuzzleState extends State<Puzzle> {
  late int img_num;
  late List<String> images;
  late List<int> img_positions;
  late int blank;
  late bool play;
  MovementFunc MF = MovementFunc();
  Random random = Random();

  @override
  void initState() {
    super.initState();
    play = false;
    img_num = 0;
    images = List.from(img_packs[img_num]);
    img_positions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  void Solve() {
    play = false;
    setState(() {
      images = List.from(img_packs[img_num]);
      img_positions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    });
  }

  void NextImage() {
    setState(() {
      if (img_num == 5)
        img_num = 0;
      else
        img_num++;
      print('nextimage activated');
      Solve();
    });
  }

  void PrevImage() {
    setState(() {
      if (img_num == 0)
        img_num = 5;
      else
        img_num--;
      print('previmage activated');
      Solve();
    });
  }
  //RANDOM SHUFFLE
  // void shuffle() {
  //   List<int> shuffled;
  //   setState(() {
  //     print(images);
  //     img_positions[9] = 0;
  //     shuffled = MF.shuffle();
  //     for (var i = 0; i < 8; i++) {
  //       img_positions[i + 1] = shuffled[i];
  //     }
  //     img_positions[0] = 9;
  //     print(img_positions);
  //     for (var i = 0; i < 10; i++) {
  //       images[i] = img_packs[img_num][img_positions[i]];
  //     }
  //     print(images);
  //     blank = 9;
  //   });
  // }

  void loadImagePositions() {
    print("image reload");
    setState(() {
      for (var i = 0; i < 10; i++) {
        images[i] = img_packs[img_num][img_positions[i]];
      }
    });
  }

  //Puzzle Shuffle
  bool RandomMove() {
    int rand = random.nextInt(9) + 1;
    print(rand);
    if (rand == blank + 1 ||
        rand == blank - 1 ||
        rand == blank + 3 ||
        rand == blank - 3) {
      setState(() {
        img_positions[blank] = img_positions[rand];
        img_positions[rand] = 0;
        blank = rand;
      });
      return true;
    } else
      return false;
  }

  void PuzzShuffle() {
    Solve();
    play = true;
    blank = 9;
    for (var x = 0; x < 40;) {
      if (RandomMove()) x++;
    }
    loadImagePositions();
  }

  void MoveTile(int pos) {
    if (play == true) {
      if (pos == blank + 1 ||
          pos == blank - 1 ||
          pos == blank + 3 ||
          pos == blank - 3) {
        print('Movetile Activated');
        img_positions[blank] = img_positions[pos];
        img_positions[pos] = 0;
        blank = pos;
        loadImagePositions();
        if (checkComplete()) Solve();
      }
    }
  }

  bool checkComplete() {
    for (var i = 1; i < 9; i++) {
      if (img_positions[i] != i) {
        return false;
      }
    }
    print('Completed');
    return true;
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        TextButton(
            onPressed: () {
              PuzzShuffle();
              print('Shuffle pressed');
            },
            child: Text('Shuffle')),
        Row(mainAxisAlignment: MainAxisAlignment.center, children: <Widget>[
          TextButton(
              onPressed: () {
                PrevImage();
              },
              child: Text('Previous Image')),
          TextButton(
              onPressed: () {
                NextImage();
              },
              child: Text('Next Image')),
        ]),
        Container(
          height: 525,
          width: 525,
          color: Colors.white,
          child: GridView.count(
              crossAxisCount: 3, // Set the number of columns in the grid
              crossAxisSpacing: 0, // Set the spacing between columns
              mainAxisSpacing: 0, // Set the spacing between rows
              children: <Widget>[
                GestureDetector(
                  onTap: () {
                    print('Tapped 1');
                    MoveTile(1);
                  },
                  child: Image.asset(
                    images[1],
                    width: 175,
                    height: 175,
                  ),
                ),
                GestureDetector(
                  onTap: () {
                    print('Tapped 2');
                    MoveTile(2);
                  },
                  child: Image.asset(
                    images[2],
                    width: 175,
                    height: 175,
                  ),
                ),
                GestureDetector(
                  onTap: () {
                    print('Tapped 3');
                    MoveTile(3);
                  },
                  child: Image.asset(
                    images[3],
                    width: 175,
                    height: 175,
                  ),
                ),
                GestureDetector(
                  onTap: () {
                    print('Tapped 4');
                    MoveTile(4);
                  },
                  child: Image.asset(
                    images[4],
                    width: 175,
                    height: 175,
                  ),
                ),
                GestureDetector(
                  onTap: () {
                    print('Tapped 5');
                    MoveTile(5);
                  },
                  child: Image.asset(
                    images[5],
                    width: 175,
                    height: 175,
                  ),
                ),
                GestureDetector(
                  onTap: () {
                    print('Tapped 6');
                    MoveTile(6);
                  },
                  child: Image.asset(
                    images[6],
                    width: 175,
                    height: 175,
                  ),
                ),
                GestureDetector(
                  onTap: () {
                    print('Tapped 7');
                    MoveTile(7);
                  },
                  child: Image.asset(
                    images[7],
                    width: 175,
                    height: 175,
                  ),
                ),
                GestureDetector(
                  onTap: () {
                    print('Tapped 8');
                    MoveTile(8);
                  },
                  child: Image.asset(
                    images[8],
                    width: 175,
                    height: 175,
                  ),
                ),
                GestureDetector(
                  onTap: () {
                    print('Tapped 9');
                    MoveTile(9);
                  },
                  child: Image.asset(
                    images[9],
                    width: 175,
                    height: 175,
                  ),
                ),
              ]),
        ),
      ],
    );
  }
}
